const createVehicle = function (type, numWheels, color) {
  const vehicle = [];
  vehicle.type = type;
  vehicle.numbers = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "red");
const skateboard = createVehicle("skateboard", 4, "black");

const myvehicles = [car, bike, skateboard];

for (let vehicle of myvehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}
