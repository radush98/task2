import { categories } from "../data/categories";

function getCategoryImage(outerCategory){
    return categories.find(category => category.name === outerCategory).icon;
}

export default getCategoryImage;