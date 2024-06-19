"use client"
import { useEffect } from "react"

export function Square(){

    useEffect(() => {
        console.log("Conectado");

        return (() => {
            console.log("Desconectado")
        })
    })

    return  <div className="w-52 h-52 bg-orange-700 text-white">
        Texto qualquer 
    </div>
}