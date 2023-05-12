import { sequelize } from '../db.js';
import { DataTypes} from 'sequelize';


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    telefon: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING},
});
const Bascet = sequelize.define('bascet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});
const BascetTovar = sequelize.define('bascet_tovar', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});
const Tovar = sequelize.define('tovar', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
});
const Categories = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})


User.hasOne(Bascet);
Bascet.belongsTo(User);

Bascet.hasMany(BascetTovar);
BascetTovar.belongsTo(Bascet);
    
Categories.hasMany(Tovar);
Tovar.belongsTo(Categories);

Tovar.hasMany(BascetTovar);
BascetTovar.belongsTo(Tovar);


export {Bascet, BascetTovar, Categories, Tovar, User};


