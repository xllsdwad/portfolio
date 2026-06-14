const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

// Simple tunnel using localtunnel
const lt = require("D:\\Documents\\作品集网站\\node_modules\\localtunnel");
const urlFile = "D:\\Documents\\作品集网站\\tunnel_url.txt";

async function start() {
  try {
    const tunnel = await lt({ port: 3000, subdomain: "zhousiyu" });
    const url = tunnel.url;
    fs.writeFileSync(urlFile, url);
    console.log("Public URL:", url);
    
    tunnel.on("close", () => {
      console.log("Tunnel closed");
    });
  } catch(e) {
    fs.writeFileSync(urlFile, "ERROR: " + e.message);
    console.error("Failed:", e.message);
  }
}
start();
