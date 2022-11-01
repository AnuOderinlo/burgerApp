import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const IngredientPrices = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  };

  handleAddIngredient = (type) => {
    let oldCount = this.state.ingredients[type];
    let newCount = oldCount + 1;
    let newStateIngredient = { ...this.state.ingredients };

    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + IngredientPrices[type];
    newStateIngredient[type] = newCount;

    this.setState({ ingredients: newStateIngredient, totalPrice: newPrice });
  };

  handleRemoveIngredient = (type) => {
    let oldCount = this.state.ingredients[type];
    if (this.state.ingredients[type] <= 0) return;
    let newCount = oldCount - 1;
    let newStateIngredient = { ...this.state.ingredients };
    newStateIngredient[type] = newCount;

    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - IngredientPrices[type];
    newStateIngredient[type] = newCount;

    this.setState({ ingredients: newStateIngredient, totalPrice: newPrice });

    console.log(this.state.totalPrice);
  };

  render() {
    // this.handleAddIngredient("salad");
    let disableInfo = { ...this.state.ingredients };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    // console.log(disableInfo);
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          removeIngredient={this.handleRemoveIngredient}
          addIngredient={this.handleAddIngredient}
          disabled={disableInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
