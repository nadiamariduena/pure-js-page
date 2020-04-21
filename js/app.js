// -----------------DEBUT FUNCTION MEDIA QUERY

function myFunction(responsive) {
  if (responsive.matches) {
    // If media query matches
    document.body.style.backgroundImage =
      "url(./img/Festival-Circulation-metalmagazine-9.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-Repeat";
    document.body.style.overflowX = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // ---------------DEBUT----------------------------

    let pageWrapper = document.querySelector("#page");
    pageWrapper.style.display = "flex";
    pageWrapper.style.flexDirection = "column";
    pageWrapper.style.backgroundColor = "white";

    // -------------H1-headline------------------------

    let headerHeading = document.querySelector(".title");
    headerHeading.style.backgroundColor = "white";
    headerHeading.style.fontFamily = "arial";
    headerHeading.style.padding = "30px 50px";
    headerHeading.style.textAlign = "center";
    headerHeading.style.color = "#000";

    // var headerTitle = document.querySelector(".cloud");
    // console.log(headerTitle);

    // -------------------------Main------------------------------------
    //first section
    // -----------------------------------------------------------------
    let sectionMain = document.querySelector(".main");
    sectionMain.style.height = "100vh";
    sectionMain.style.backgroundColor = "#fff";
    sectionMain.style.padding = "50px";
    sectionMain.style.fontFamily = "arial";
    sectionMain.style.display = "flex";
    sectionMain.style.flexDirection = "column";

    // ---------------
    // food category STARTERS
    // ---------------
    let foodCategory = sectionMain.querySelector(".food-category");
    // let foodCategory = sectionMain.querySelector(".food-category li");
    foodCategory.style.display = "flex";
    foodCategory.style.flexDirection = "column";
    foodCategory.style.justifyContent = "center";
    foodCategory.style.alignItems = "center";
    foodCategory.style.backgroundColor = "#F4F2B5";
    foodCategory.style.padding = "20px 20px";
    foodCategory.style.height = "150px";
    //
    //
    // ---label--food--category STARTER
    //
    let insideLabel = document.querySelectorAll("label[class='category']");

    insideLabel[0].style.fontFamily = "Courier New";
    insideLabel[0].style.borderBottom = "3px solid #000";
    insideLabel[0].style.paddingBottom = "5px";
    insideLabel[0].style.marginBottom = "10px";
    insideLabel[0].style.fontSize = "1.5rem";
    insideLabel[0].style.fontWeight = "600";
    insideLabel[0].style.textAlign = "center";
    //
    //
    //--Li--food-category STARTER
    let insideListStarter = document.querySelectorAll("li[class='food-item']");

    insideListStarter.forEach((item) => {
      item.style.backgroundColor = "#F0EEA0";
      item.style.textAlign = "center";
      item.style.padding = "5px 0px";
      item.style.listStyle = "none";
    });

    // insideListStarter[0].style.backgroundColor = "#ddd";
    // insideListStarter[1].style.backgroundColor = "#f3f3f3";
    // insideListStarter[2].style.backgroundColor = "#ccc";
    //
    //
    // ---------------*****---------------------------
    // food category MAINS
    // ---------------*****---------------------------

    let foodCategoryTwo = document.querySelector(".food-category:nth-child(2)");
    foodCategoryTwo.style.backgroundColor = "#F4F2B5";
    foodCategoryTwo.style.padding = "20px 20px";
    foodCategoryTwo.style.height = "150px";
    foodCategoryTwo.style.display = "flex";
    foodCategoryTwo.style.alignItems = "center";
    foodCategoryTwo.style.flexDirection = "column";
    foodCategoryTwo.style.justifyContent = "center";
    //
    //
    // ---label--food--category MAINS
    let insideLabelMains = document.querySelectorAll("label[class='category']");

    insideLabelMains[1].style.fontFamily = "Courier New";
    insideLabelMains[1].style.color = "#000";
    insideLabelMains[1].style.fontSize = "1.5rem";
    insideLabelMains[1].style.paddingBottom = "5px";
    insideLabelMains[1].style.marginBottom = "10px";
    insideLabelMains[1].style.borderBottom = "3px solid #000";
    insideLabelMains[1].style.textAlign = "center";
    //
    //
    let insideListMains = document.querySelectorAll("li[class='food-item']");

    //--Li--food-category MAIN
    // let insideListMains = document.querySelectorAll("li[class='food-item']");
    // insideListMains[0].style.backgroundColor = "#333333";
    //
    //
    // ---------------*****---------------------------
    // food category DESSERTS
    // ---------------*****---------------------------
    let foodCategoryThree = document.querySelector(
      ".food-category:nth-child(3)"
    );
    foodCategoryThree.style.backgroundColor = "#F4F2B5";
    foodCategoryThree.style.padding = "20px 20px";
    foodCategoryThree.style.height = "150px";
    foodCategoryThree.style.display = "flex";
    foodCategoryThree.style.flexDirection = "column";
    foodCategoryThree.style.justifyContent = "center";
    foodCategoryThree.style.alignItems = "center";
    //
    //
    // ---label--food--category DESSERTS
    let insideLabelDessert = document.querySelectorAll(
      "label[class='category']"
    );
    insideLabelDessert[2].style.fontFamily = "Courier New";
    insideLabelDessert[2].style.color = "black";
    insideLabelDessert[2].style.fontSize = "1.5rem";
    insideLabelDessert[2].style.paddingBottom = "5px";
    insideLabelDessert[2].style.marginBottom = "10px";
    insideLabelDessert[2].style.textAlign = "center";
    insideLabelDessert[2].style.borderBottom = "3px solid #000";
    //
    //
    //

    // ---------------*****---------------------------
    // ALLERGY WARNING SECTION
    // ---------------*****---------------------------
    let allergySection = document.querySelector(".allergy-warning");

    allergySection.style.height = "70vh";
    allergySection.style.backgroundColor = "#f3f3f3";
    allergySection.style.fontFamily = "arial";
    allergySection.style.fontSize = "1.2rem";
    allergySection.style.display = "flex";
    allergySection.style.flexDirection = "column";
    allergySection.style.justifyContent = "center";
    allergySection.style.alignItems = "center";
    allergySection.style.padding = "20px";
    //
    //
    //
    // --------H3-headline-----------
    let allergyHeadingSection = document.querySelector("#warning");

    allergyHeadingSection.style.padding = "0px 0px";
    allergyHeadingSection.style.textTransform = "uppercase";
    allergyHeadingSection.style.letterSpacing = "2px";
    allergyHeadingSection.style.textAlign = "center";
    allergyHeadingSection.style.color = "#282828";
    allergyHeadingSection.style.WebkitTextFillColor = "transparent";
    allergyHeadingSection.style.WebkitTextStrokeWidth = "1px";
    allergyHeadingSection.style.lineHeight = "28px";
    // allergyHeadingSection.style.fontSize = "1.1rem";
    // allergyHeadingSection.style.fontStyle = "italic";
    // allergySection.style.padding = "20px";

    // -----------------------------------
    //  UL ALLERGIES
    // -----------------------------------
    let allergiesWrapper = document.querySelector(".allergies");

    allergiesWrapper.style.fontSize = "1.1rem";
    allergiesWrapper.style.color = "#333";
    allergiesWrapper.style.display = "flex";
    allergiesWrapper.style.flexDirection = "column";
    // allergiesWrapper.style.justifyContent = "center";
    // allergiesWrapper.style.alignItems = "center";

    // -------------------------------------
    //  FOOTER
    // -------------------------------------
    let footerWrapper = document.querySelector(".footer");
    footerWrapper.style.backgroundColor = "#00b65e";
    footerWrapper.style.height = "15vh";
    footerWrapper.style.display = "flex";
    footerWrapper.style.flexDirection = "row";
    footerWrapper.style.justifyContent = "space-around";
    footerWrapper.style.alignItems = "center";

    //
    //
    // -------------------------------------
    //  food-desc
    // -------------------------------------
    let foodSensation = document.querySelectorAll(".food-desc");
    foodSensation[0].style.fontFamily = "arial";
    foodSensation[1].style.fontFamily = "arial";
    foodSensation[2].style.fontFamily = "arial";
    foodSensation[0].style.color = "#f3f3f3";
    foodSensation[1].style.color = "#f3f3f3";
    foodSensation[2].style.color = "#f3f3f3";
    foodSensation[0].style.fontSize = "0.8rem";
    foodSensation[1].style.fontSize = "0.8rem";
    foodSensation[2].style.fontSize = "0.8rem";
    foodSensation[0].style.textTransform = "uppercase";
    foodSensation[1].style.textTransform = "uppercase";
    foodSensation[2].style.textTransform = "uppercase";
    // --------------------------
    // foodSensation[0].style.backgroundColor = "red";
    // foodSensation[0].style.padding = "10px";
    // foodSensation[0].style.borderRadius = "50%";
    // foodSensation[0].style.fontSize = "0.8rem";
    // --------------------------
    // --------------------------
    // ----------ELSE----------------
  } else {
    // document.body.style.backgroundColor = "pink";

    // If media query matches
    document.body.style.backgroundImage = "url(./img/linea-white2png.png)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.overflowX = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // ---------------PAGE----------------------------

    let pageWrapper = document.querySelector("#page");
    pageWrapper.style.display = "flex";
    pageWrapper.style.flexDirection = "column";
    pageWrapper.style.margin = "0 auto";
    pageWrapper.style.width = "80%";
    pageWrapper.style.backgroundColor = "white";
    pageWrapper.style.borderLeft = "1px solid #000";
    pageWrapper.style.borderRight = "1px solid #000";
    // -------------H1-headline------------------------

    let headerHeading = document.querySelector(".title");
    headerHeading.style.textTransform = "uppercase";
    headerHeading.style.fontFamily = "arial";
    headerHeading.style.fontSize = "3rem";
    headerHeading.style.padding = "100px 50px";
    headerHeading.style.textAlign = "center";
    headerHeading.style.color = "#282828";
    headerHeading.style.WebkitTextFillColor = "transparent";
    headerHeading.style.WebkitTextStrokeWidth = "1px";

    // var headerTitle = document.querySelector(".cloud");
    // console.log(headerTitle);

    // -------------------------Main------------------------------------
    //first section
    // -----------------------------------------------------------------
    let sectionMain = document.querySelector(".main");
    sectionMain.style.height = "70vh";

    sectionMain.style.display = "flex";
    sectionMain.style.flexDirection = "row";
    sectionMain.style.justifyContent = "space-evenly";
    sectionMain.style.alignItems = "center";
    sectionMain.style.borderTop = "1px solid #000";
    sectionMain.style.fontFamily = "arial";

    // ---------------
    // food category STARTERS
    // ---------------
    let foodCategory = sectionMain.querySelector(".food-category");
    // let foodCategory = sectionMain.querySelector(".food-category li");
    foodCategory.style.display = "flex";
    foodCategory.style.flexDirection = "column";
    foodCategory.style.justifyContent = "center";
    foodCategory.style.alignItems = "center";
    foodCategory.style.backgroundColor = "#F4F2B5";
    foodCategory.style.padding = "20px 20px";
    foodCategory.style.boxShadow = "10px -10px 0 0 #000";
    foodCategory.style.border = "1px solid #000";

    //
    //
    // ---label--food--category STARTER
    //
    let insideLabel = document.querySelectorAll("label[class='category']");

    insideLabel[0].style.fontFamily = "Courier New";
    insideLabel[0].style.borderBottom = "1px dotted #000";
    insideLabel[0].style.paddingBottom = "5px";
    insideLabel[0].style.marginBottom = "10px";
    insideLabel[0].style.fontSize = "1.5rem";
    insideLabel[0].style.fontWeight = "600";
    insideLabel[0].style.textAlign = "center";
    insideLabel[0].style.width = "200px";
    insideLabel[0].style.height = "50px";

    //
    insideLabel[1].style.width = "200px";
    insideLabel[1].style.height = "50px";
    //
    insideLabel[2].style.width = "200px";
    insideLabel[2].style.height = "50px";
    //
    //
    //--Li--food-category STARTER
    let insideListStarter = document.querySelectorAll("li[class='food-item']");

    insideListStarter.forEach((item) => {
      item.style.backgroundColor = "#F0EEA0";
      item.style.textAlign = "center";
      item.style.padding = "5px 0px";
      item.style.listStyle = "none";
    });

    // insideListStarter[0].style.backgroundColor = "#ddd";
    // insideListStarter[1].style.backgroundColor = "#f3f3f3";
    // insideListStarter[2].style.backgroundColor = "#ccc";
    //
    //
    // ---------------*****---------------------------
    // food category MAINS
    // ---------------*****---------------------------

    let foodCategoryTwo = document.querySelector(".food-category:nth-child(2)");
    foodCategoryTwo.style.backgroundColor = "#F4F2B5";
    foodCategoryTwo.style.padding = "20px 20px";
    foodCategoryTwo.style.height = "150px";
    foodCategoryTwo.style.display = "flex";
    foodCategoryTwo.style.alignItems = "center";
    foodCategoryTwo.style.flexDirection = "column";
    foodCategoryTwo.style.justifyContent = "center";
    foodCategoryTwo.style.boxShadow = "10px -10px 0 0 #000";
    foodCategoryTwo.style.border = "1px solid #000";
    //
    //
    // ---label--food--category MAINS
    let insideLabelMains = document.querySelectorAll("label[class='category']");

    insideLabelMains[1].style.fontFamily = "Courier New";
    insideLabelMains[1].style.color = "#000";
    insideLabelMains[1].style.fontSize = "1.5rem";
    insideLabelMains[1].style.paddingBottom = "5px";
    insideLabelMains[1].style.marginBottom = "10px";
    insideLabelMains[1].style.borderBottom = "1px dotted #000";
    insideLabelMains[1].style.textAlign = "center";
    //
    //
    let insideListMains = document.querySelectorAll("li[class='food-item']");

    //--Li--food-category MAIN
    // let insideListMains = document.querySelectorAll("li[class='food-item']");
    // insideListMains[0].style.backgroundColor = "#333333";
    //
    //
    // ---------------*****---------------------------
    // food category DESSERTS
    // ---------------*****---------------------------
    let foodCategoryThree = document.querySelector(
      ".food-category:nth-child(3)"
    );
    foodCategoryThree.style.backgroundColor = "#F4F2B5";
    foodCategoryThree.style.padding = "20px 20px";
    foodCategoryThree.style.height = "150px";
    foodCategoryThree.style.display = "flex";
    foodCategoryThree.style.flexDirection = "column";
    foodCategoryThree.style.justifyContent = "center";
    foodCategoryThree.style.alignItems = "center";
    foodCategoryThree.style.boxShadow = "10px -10px 0 0 #000";
    foodCategoryThree.style.border = "1px solid #000";
    //
    //
    // ---label--food--category DESSERTS
    let insideLabelDessert = document.querySelectorAll(
      "label[class='category']"
    );
    insideLabelDessert[2].style.fontFamily = "Courier New";
    insideLabelDessert[2].style.color = "black";
    insideLabelDessert[2].style.fontSize = "1.5rem";
    insideLabelDessert[2].style.paddingBottom = "5px";
    insideLabelDessert[2].style.marginBottom = "10px";
    insideLabelDessert[2].style.textAlign = "center";
    insideLabelDessert[2].style.borderBottom = "1px dotted #000";
    //
    //
    //

    // ---------------*****---------------------------
    // ALLERGY WARNING SECTION
    // ---------------*****---------------------------
    let allergySection = document.querySelector(".allergy-warning");

    allergySection.style.height = "80vh";
    allergySection.style.backgroundColor = "#fff";
    allergySection.style.fontFamily = "arial";
    allergySection.style.fontSize = "1.2rem";
    allergySection.style.display = "flex";
    allergySection.style.flexDirection = "column";
    allergySection.style.justifyContent = "center";
    allergySection.style.alignItems = "center";
    allergySection.style.padding = "20px";
    allergySection.style.borderTop = "1px solid #000";
    //
    //
    //
    // --------H3-headline-----------
    let allergyHeadingSection = document.querySelector("#warning");

    allergyHeadingSection.style.textTransform = "uppercase";
    allergyHeadingSection.style.letterSpacing = "2px";
    allergyHeadingSection.style.textAlign = "center";
    allergyHeadingSection.style.color = "#111111";
    allergyHeadingSection.style.WebkitTextFillColor = "transparent";
    allergyHeadingSection.style.WebkitTextStrokeWidth = "1px";
    allergyHeadingSection.style.fontSize = "2rem";
    allergyHeadingSection.style.lineHeight = "31px";
    allergyHeadingSection.style.marginBottom = "60px";

    // -----------------------------------
    //  UL ALLERGIES
    // -----------------------------------
    let allergiesWrapper = document.querySelector(".allergies");

    allergiesWrapper.style.fontSize = "1.1rem";
    allergiesWrapper.style.color = "#333";
    allergiesWrapper.style.display = "flex";
    allergiesWrapper.style.flexDirection = "column";
    allergiesWrapper.style.border = "1px solid #000";
    allergiesWrapper.style.boxShadow = "20px -10px 50px 0 #fdc8af";
    // to remove the space in the list ,do it with the two below
    allergiesWrapper.style.margin = "0";
    allergiesWrapper.style.padding = "0";
    //
    //
    // ALLERGY INFO
    let allergyInfo = document.querySelectorAll(".allergy-info");

    allergyInfo[0].style.color = "#666";
    allergyInfo[0].style.backgroundColor = "#eee";
    allergyInfo[0].style.listStyle = "none";
    allergyInfo[0].style.padding = "5px 10px";
    // --
    allergyInfo[1].style.color = "#666";
    allergyInfo[1].style.backgroundColor = "#fdc8af";
    allergyInfo[1].style.listStyle = "none";
    allergyInfo[1].style.padding = "5px 10px";
    // --
    allergyInfo[2].style.color = "#666";
    allergyInfo[2].style.backgroundColor = "#eee";
    allergyInfo[2].style.listStyle = "none";
    allergyInfo[2].style.padding = "5px 10px";
    // ---
    allergyInfo[3].style.color = "#666";
    allergyInfo[3].style.backgroundColor = "#fdc8af";
    allergyInfo[3].style.listStyle = "none";
    allergyInfo[3].style.padding = "5px 10px";
    // --
    allergyInfo[4].style.color = "#666";
    allergyInfo[4].style.backgroundColor = "#eee";
    allergyInfo[4].style.listStyle = "none";
    allergyInfo[4].style.padding = "5px 10px";
    // --
    allergyInfo[5].style.color = "#666";
    allergyInfo[5].style.backgroundColor = "#fdc8af";
    allergyInfo[5].style.listStyle = "none";
    allergyInfo[5].style.padding = "5px 10px";
    // ------------------------------------
    //
    // -------------------------------------
    //  FOOTER
    // -------------------------------------
    let footerWrapper = document.querySelector(".footer");
    footerWrapper.style.backgroundColor = "#00b65e";
    footerWrapper.style.height = "30vh";
    footerWrapper.style.display = "flex";
    footerWrapper.style.flexDirection = "row";
    footerWrapper.style.justifyContent = "space-around";
    footerWrapper.style.alignItems = "center";
    footerWrapper.style.borderTop = "1px solid #000";

    //
    //
    // -------------------------------------
    //  food-desc
    // -------------------------------------
    let foodSensation = document.querySelectorAll(".food-desc");
    foodSensation[0].style.fontFamily = "arial";
    foodSensation[0].style.backgroundColor = "#fff";
    foodSensation[0].style.color = "#000";
    foodSensation[0].style.border = "2px solid #000";
    foodSensation[0].style.width = "100px";
    foodSensation[0].style.height = "100px";
    foodSensation[0].style.textAlign = "center";
    foodSensation[0].style.borderRadius = "100%";
    foodSensation[0].style.display = "flex";
    foodSensation[0].style.flexDirection = "column";
    foodSensation[0].style.justifyContent = "center";
    foodSensation[0].style.fontSize = "0.6rem";
    foodSensation[0].style.textTransform = "uppercase";
    // --------------------------

    foodSensation[1].style.fontFamily = "arial";
    foodSensation[1].style.backgroundColor = "#fff";
    foodSensation[1].style.color = "#000";
    foodSensation[1].style.border = "2px solid #000";
    foodSensation[1].style.width = "100px";
    foodSensation[1].style.height = "100px";
    foodSensation[1].style.textAlign = "center";
    foodSensation[1].style.borderRadius = "100%";
    foodSensation[1].style.display = "flex";
    foodSensation[1].style.flexDirection = "column";
    foodSensation[1].style.justifyContent = "center";
    foodSensation[1].style.fontSize = "0.6rem";
    foodSensation[1].style.textTransform = "uppercase";
    // --------------------------
    foodSensation[2].style.fontFamily = "arial";
    foodSensation[2].style.backgroundColor = "#fff";
    foodSensation[2].style.color = "#000";
    foodSensation[2].style.border = "2px solid #000";
    foodSensation[2].style.width = "100px";
    foodSensation[2].style.height = "100px";
    foodSensation[2].style.textAlign = "center";
    foodSensation[2].style.borderRadius = "100%";
    foodSensation[2].style.display = "flex";
    foodSensation[2].style.flexDirection = "column";
    foodSensation[2].style.justifyContent = "center";
    foodSensation[2].style.fontSize = "0.6rem";
    foodSensation[2].style.textTransform = "uppercase";
  }
}

var responsive = window.matchMedia("(max-width: 800px)");
myFunction(responsive); // Call listener function at run time
responsive.addListener(myFunction); // Attach listener function on state changes
