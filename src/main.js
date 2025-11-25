import { k } from "./kaboomLoader.js";
import { homePage } from "./Scenes/homePage.js";
import { intro } from "./Scenes/intro.js";
import { museumPage } from "./Scenes/museum.js";
import { restaurantPage } from "./Scenes/restaurant.js";
import { housePage } from "./Scenes/housePage.js";
import { schoolPage } from "./Scenes/school.js";

async function main()
{
  const HomePageData = await (await fetch("./maps/Portfolio Map.json")).json();
  k.scene("HomePage", (sceneData = {}) => {
    homePage(k, HomePageData, sceneData);
  });

  k.scene("museumPage", () => {
    museumPage(k);
  });

  k.scene("restaurantPage", () => {
    restaurantPage(k);
  });

  k.scene("housePage", () => {
    housePage(k);
  })
  
  k.scene("schoolPage", () => {
    schoolPage(k);
  })
}

main();

k.scene("Intro", () => {
  intro(k);
  k.onClick(() => {
    k.go("HomePage");
  })
});

k.go("Intro");