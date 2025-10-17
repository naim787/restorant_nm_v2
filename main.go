package main

import (
	"log"

	"github.com/gofiber/contrib/websocket"
	"github.com/gofiber/fiber/v2"
	"github.com/naim787/restorant_nm_v2/api/handler/Websoket"
)

func main() {
	app := fiber.New()

	app.Use("/ws", Websoket.WebSocketHandler)
	app.Get("/ws/orders", websocket.New(Websoket.HandleOrders))

	
	log.Fatal(app.Listen(":3001"))
}
