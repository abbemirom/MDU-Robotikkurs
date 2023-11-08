import * as mqtt from "mqtt" // import everything inside the mqtt module and give it the namespace "mqtt"
const options = {
    port: 1883,
    clientId: "emilia@romberg.nu",
    clean: false,
}

let client = mqtt.connect("ws://maqiatto.com", options) // create a client

export { client }