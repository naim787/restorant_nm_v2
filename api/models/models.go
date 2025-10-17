package models

// Products mewakili tabel "products"
type Product struct {
	ID          string  `gorm:"primaryKey;column:id"`
	Name        string  `gorm:"column:name"`
	Description string  `gorm:"column:description"`
	Category    string  `gorm:"column:category"`
	Price       float64 `gorm:"column:price"`
	Stock       int `gorm:"column:stock"`
	ImageURL    string  `gorm:"column:image_url"`
}


type OrderItem struct {
	ID            int    `gorm:"primaryKey;column:id;autoIncrement"`
	ProductId       int    `gorm:"column:product_id"`
	ProductType     string `gorm:"column:product_type;default:''"`
	ProductsId    string `gorm:"column:products_id"`
	ProductsName  string `gorm:"column:products_name"`
	ProductPrice  int    `gorm:"column:product_price"`
	Value         int    `gorm:"column:value"`
	Total         int    `gorm:"column:total"`
	// Relasi balik ke Order
	Order Order `gorm:"foreignKey:OrderID;constraint:OnDelete:CASCADE"`
}

// {
//   "id": 123,
//   "No_Table": 2,
//   "Waiter_Name": "naim",
//   "time": "12-09-2025/12:00",
//   "Total": 124,
//   "Status": "pending",
//   "ProductOrder": [
//     {
//       "ID" : 1455,
//       "OrderID": 123, // id product
//       "OrderType": "makanan",
//       "ProductsID": "P001",
//       "ProductsName": "Nasi Goreng",
//       "ProductPrice": 30000,
//       "Value": 2,
//       "Total": 60000,
//     }
//   ]
// }

type Order struct {
	ID          int         `gorm:"primaryKey;column:id;autoIncrement"`
	NoTable     int         `gorm:"column:table_id"`
	WaiterName  string      `gorm:"column:waiter_name"`
	Time        string      `gorm:"column:time"`
	Total       int         `gorm:"column:total"`
	Status      string      `gorm:"column:status ; default:pending"`

	// Relasi ke OrderItem
	ProductOrders []OrderItem `gorm:"foreignKey:OrderID;constraint:OnDelete:CASCADE"`
}