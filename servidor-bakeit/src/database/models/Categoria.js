module.exports = (sequelize, DataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'categorias'
    };

    const Categoria = sequelize.define(alias, cols, config);

    // Relaciones

    return Categoria
};