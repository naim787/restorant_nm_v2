package Websoket
import (
	"encoding/json"
	"fmt"
	"github.com/naim787/restorant_nm_v2/api/models"
	"github.com/naim787/restorant_nm_v2/api/repository"

	"github.com/gofiber/contrib/websocket"
	"github.com/gofiber/fiber/v2"
)

var clients = make(map[*websocket.Conn]bool)

// Middleware to check WebSocket upgrade
func WebSocketHandler(c *fiber.Ctx) error {
	// Check if the request is a WebSocket upgrade
	if websocket.IsWebSocketUpgrade(c) {
		c.Locals("allowed", true)
		return c.Next()
	}
	return fiber.ErrUpgradeRequired
}

// WebSocket connection handler for orders
func HandleOrders(c *websocket.Conn) {
	clients[c] = true
	defer func() {
		delete(clients, c)
		c.Close()
	}()

	for {
		_, msg, err := c.ReadMessage()
		if err != nil { fmt.Println("Error reading message:", err) ;break}

		var order models.Order
		if err := json.Unmarshal(msg, &order); err != nil {fmt.Println("Invalid JSON format:", err); continue}

		// Marshal ulang untuk simpan Products sebagai string
		// productJSON, _ := json.Marshal(order.ProductOrders)
		// order.ProductsRaw = string(productJSON)

		// Simpan ke database
		repository.DB.Create(&order)

		response := map[string]interface{}{
			"message": "Order saved successfully",
			"orders":  order,
		}

		// broadcast ke semua klien
		for conn := range clients {
			if err := conn.WriteJSON(response); err != nil {
				fmt.Println("Broadcast failed:", err)
				conn.Close()
				delete(clients, conn)
			}
		}
	}
}