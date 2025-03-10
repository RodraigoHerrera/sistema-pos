-- CreateTable
CREATE TABLE `Sucursal` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(20) NULL,
    `horaApertura` TIME NOT NULL,
    `horaCierre` TIME NOT NULL,
    `correo` VARCHAR(255) NOT NULL,
    `contraseña` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Sucursal_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleado` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `puesto` VARCHAR(100) NULL,
    `salario` DECIMAL(10, 2) NULL,
    `fechaContratacion` DATETIME(3) NOT NULL,
    `correo` VARCHAR(255) NOT NULL,
    `contraseña` VARCHAR(255) NOT NULL,
    `sucursalId` BIGINT NOT NULL,

    UNIQUE INDEX `Empleado_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Empleado` ADD CONSTRAINT `Empleado_sucursalId_fkey` FOREIGN KEY (`sucursalId`) REFERENCES `Sucursal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
