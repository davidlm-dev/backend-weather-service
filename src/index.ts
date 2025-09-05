import mqtt from 'mqtt'
interface ClimaPayload {
  id: number
  nombre: string
  region: string
  timestamp: string
  estacion_año: string
  nubosidad: number
  uv_index: number
  humedad: number
  temperatura: number
  sensacion_termica: number
  presion: number
  viento: number
  direccion_viento: number
  precipitacion: number
  radiacion_solar: number
}

// ==== Configuración MQTT ====
const brokerUrl = 'mqtt://localhost:1883' // Cambia si tu broker está en otro host/puerto
const topic = 'sensores/clima/#' // Suscripción a todas las estaciones

const client = mqtt.connect(brokerUrl)

// ==== Conexión al broker ====
client.on('connect', () => {
  console.log(`Conectado al broker MQTT en ${brokerUrl}`)
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Suscrito a: ${topic}`)
    } else {
      console.error('Error al suscribirse:', err)
    }
  })
})

// ==== Recepción de mensajes ====
client.on('message', (topic: string, message: Buffer) => {
  try {
    const payload = JSON.parse(message.toString()) as ClimaPayload
    console.log('Mensaje recibido:')
    console.log('  Topic:', topic)
    console.log('  Datos:', payload)
  } catch (err) {
    console.error('Error procesando mensaje:', err)
    console.log('Mensaje crudo:', message.toString())
  }
})
