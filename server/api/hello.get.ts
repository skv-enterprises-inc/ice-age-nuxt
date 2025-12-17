export default defineEventHandler((event) => {
  return {
    message: 'Hello from NITRO server API!',
    timestamp: new Date().toISOString()
  }
})

