<template>
  <div>
    <h1>MQTT Subscription Example</h1>
    <ul>
      <li v-for="message in messages" :key="message.payloadString">
        {{ message.payloadString }}
      </li>
    </ul>
  </div>
</template>
<script>
import mqtt from 'mqtt'
export default {
  data () {
    return {
      messages: [],
    }
  },
  mounted () {
    // Configure MQTT server details
    const mqttServer = 'mqtt://your-mqtt-server-url' // Replace with your MQTT server URL
    const mqttClient = mqtt.connect(mqttServer)
    // Subscribe to a topic
    const topic = 'your/topic' // Replace with the MQTT topic you want to subscribe to
    mqttClient.subscribe(topic)
    // Handle incoming messages
    mqttClient.on('message', (topic, message) => {
      this.messages.push({ topic, payloadString: message.toString() })
    })
  },
}
</script>