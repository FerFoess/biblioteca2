CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE Usuarios (
    IdUsuario VARCHAR(255) PRIMARY KEY,
    Nombre VARCHAR(255),
    Correo VARCHAR(255),
    FechaNac DATE,
    Direccion VARCHAR(255),
    Telefono VARCHAR(20),
    Password VARCHAR(255),
    ConfirmPassword VARCHAR(255), 
    UserType VARCHAR(50)
);


CREATE TABLE Book (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(50),
    Editorial VARCHAR(20),
    FechaRegistro DATETIME,
    Categoria VARCHAR(50),
    Autor VARCHAR(50),
    Piezas INT
);

CREATE TABLE Multas (
    IdMulta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FechaPag DATETIME,
    Monto DECIMAL(10, 2),
    Estatus VARCHAR(50),
    IdPrestamo INT,
    FOREIGN KEY (IdPrestamo) REFERENCES Prestamo(IdPrestamo)
);

CREATE TABLE Prestamo (
    IdPrestamo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FechaPres DATETIME,
    FechaDev DATETIME,
    IdUsuario INT,
    id INT,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario),
    FOREIGN KEY (id) REFERENCES Book(id)
);

