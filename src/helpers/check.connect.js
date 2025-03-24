'use strict'

const mongoose = require('mongoose')
const os = require('os') // Thêm dòng này để import module os
const process = require('process')

// Đặt biến _SECONDS trước khi sử dụng
const _SECONDS = 5000 

// count Connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connections: ${numConnection}`)
}

// check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length // Lấy số lượng core CPU
        const memoryUsage = process.memoryUsage().rss

        // Tính toán số lượng kết nối tối đa được phép
        const maxConnections = numCores * 5

        console.log(`Active connections: ${numConnection}`)
        console.log(`Memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`)

        if (numConnection > maxConnections) {
            console.log("⚠️ Connection overload detected!")
        }
    }, _SECONDS) // Monitor every 5 seconds
}

// Export đúng cách
module.exports = {
    countConnect,
    checkOverload
}
