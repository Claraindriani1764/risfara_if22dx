-- CreateTable
CREATE TABLE `tb_listmenu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namamenu` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(1000) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `status` ENUM('Y', 'T') NOT NULL DEFAULT 'Y',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
