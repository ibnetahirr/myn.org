import React, {useState} from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
    Button,
} from "reactstrap";


const OrderInfoTable = () => {

    const [orders, setOrders] = useState([
        {
            id: 1,
            productName: "Men's Sports Shoes",
            productImage: "/images/ecommerce/11.jpg",
            color: "White",
            size: "Small",
            status: "CANCELLED",
            price: "$452.00",
            orderDate: "5 Apr,2024 6:05 PM",
            quantity: 3,
            rating: 2,
        },
        {
            id: 2,
            productName: "Watch",
            productImage: "/images/ecommerce/18.jpg",
            color: "Black",
            size: "XL",
            status: "DELIVERED",
            price: "$988.00",
            orderDate: "5 Sep,2024 5:11 PM",
            quantity: 2,
            rating: 2,
        },
        {
            id: 3,
            productName: "T-shirt",
            productImage: "/images/ecommerce/19.jpg",
            color: "Green",
            size: "Medium",
            status: "PICKUPS",
            price: "$452.00",
            orderDate: "15 Oct,2024 1:51 PM",
            quantity: 3,
            rating: 3,
        },
        {
            id: 4,
            productName: "Shoes for Men",
            productImage: "/images/ecommerce/28.jpg",
            color: "Black",
            size: "Small",
            status: "DELIVERED",
            price: "$400.00",
            orderDate: "19 Oct,2024 6:55 PM",
            quantity: 1,
            rating: 3,
        },
    ]);

    const handleDelete = (id) => {
        const updatedOrders = orders.filter((order) => order.id !== id);
        setOrders(updatedOrders); // Update the state to remove the deleted order
    };
    return (
        <Card>
            <CardHeader>
                <h5>Order : #ACD1100897</h5>
            </CardHeader>
            <CardBody className="p-0">
                <div className="orders-details-datatable app-scroll table-responsive">
                    <Table className="table-bottom-border text-center align-middle mb-0">
                        <thead>
                        <tr>
                            <th className="text-start">Product Details</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Order Date</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={order.productImage}
                                            alt="product-img"
                                            className="h-50 b-r-10"
                                            style={{height: "50px", borderRadius: "10px"}}
                                        />
                                        <div className="text-start">
                                            <h6 className="mb-0">{order.productName}</h6>
                                            <p className="text-muted f-s-13 m-0">
                                                Color: <span className="text-secondary">{order.color}</span>
                                            </p>
                                            <p className="text-muted f-s-13 m-0">
                                                Size: <span className="text-secondary">{order.size}</span>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                 <span className={`badge text-light-${(() => {
                                     switch (order.status) {
                                         case "CANCELLED":
                                             return "danger";
                                         case "DELIVERED":
                                             return "success";
                                         case "PICKUPS":
                                             return "info";
                                         case "RETURNS":
                                             return "secondary";
                                         default:
                                             return "light";
                                     }
                                 })()}`}>
                                      {order.status}
                                 </span>
                                </td>
                                <td>{order.price}</td>
                                <td className="text-success">{order.orderDate}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <div>
                                        {[...Array(5)].map((_, i) => (
                                            <i
                                                key={i}
                                                className={`ti ti-star-filled f-s-16 ${
                                                    i < order.rating ? "text-warning" : "text-secondary"
                                                }`}
                                            ></i>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <Button color="success" className="icon-btn b-r-4 me-2">
                                        <i className="ti ti-edit"></i>
                                    </Button>{" "}
                                    <Button color="danger" className="icon-btn b-r-4"  onClick={() => handleDelete(order.id)}>
                                        <i className="ti ti-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </CardBody>
            <CardFooter>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <p className="text-secondary mb-0">Showing 1 to 6 of 24 order entries</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default OrderInfoTable;
