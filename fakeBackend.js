
// Simulated demo user
const demoUser = {
  email: "demo@fuelmate.com",
  password: "1234",
  name: "John Doe",
  orders: [
    { fuel: "Petrol", quantity: 20, date: "2025-06-15" },
    { fuel: "Diesel", quantity: 15, date: "2025-06-17" }
  ],
  vehicles: [
    { model: "Hyundai i20", number: "MH12AB1234" },
    { model: "Honda City", number: "MH14CD5678" }
  ],
  subscription: "Premium"
};

if (!localStorage.getItem("fuelmateUser")) {
  localStorage.setItem("fuelmateUser", JSON.stringify(demoUser));
}
