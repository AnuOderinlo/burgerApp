import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 3,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  handleAddIngredient = (type) => {
    let oldCount = this.state.ingredients[type];
    let newCount = oldCount + 1;
    let newStateIngredient = { ...this.state.ingredients };
    newStateIngredient[type] = newCount;

    this.setState({ ingredients: newStateIngredient });
  };

  handleRemoveIngredient = (type) => {
    let oldCount = this.state.ingredients[type];
    let newCount = oldCount - 1;
    let newStateIngredient = { ...this.state.ingredients };
    newStateIngredient[type] = newCount;
    if (this.state.ingredients[type] >= 1) {
      this.setState({ ingredients: newStateIngredient });
    }
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
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
