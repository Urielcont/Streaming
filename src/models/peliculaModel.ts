const mongoose = require("mongoose");

const peliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    generos: [{
        type: String
    }],
    duracion: {
        type: Number, // En minutos
        required: true
    },
    idioma_original: {
        type: String
    },
    idiomas_disponibles: [{
        type: String
    }],
    calificacion: {
        type: Number,
        min: 0,
        max: 10
    },
    url_streaming: {
        type: String,
        required: true
    },
    url_imagen: {
        type: String
    },
    actores: [{
        nombre: String,
        personaje: String
    }],
    fecha_estreno: {
        type: Date
    },
    subtitulos: [{
        idioma: String,
        url: String
    }],
    fecha_registro: {
        type: Date,
        default: Date.now
    }
}, { collection: "peliculas" });

const Peliculas = mongoose.model("Peliculas", peliculaSchema);

module.exports = { Peliculas };
