let count = 0;

function calculateArea(width, height, formula) {
  return (formula * width * height).toFixed(2);
}

function createResultElement(shape, area, unit) {
  return `
    <div class="px-6 mt-3 flex justify-evenly items-center">
      <div>${count}.</div>
      <div>${shape}</div>
      <div>${area} ${unit}</div>
        
    </div>
  `;
  // <button id="convertToMeter" class="bg-blue-400 px-2 py-1 rounded-sm">Convert to m<sup>2</sup></button>
}
// Triangle Area Calculation
document
  .getElementById("triangleAreaBtn")
  .addEventListener("click", function () {
    let triangleB = parseInt(document.getElementById("triangleB").value) || 0;
    let triangleH = parseInt(document.getElementById("triangleH").value) || 0;
    let triangleArea = calculateArea(triangleB, triangleH, 0.5);
    console.log(triangleArea);

    let resultContainer = document.getElementById("resultContainer");
    let newElement = document.createElement("div");
    count++;
    newElement.innerHTML = createResultElement(
      "Triangle",
      triangleArea,
      "cm<sup>2</sup>"
    );

    resultContainer.appendChild(newElement);
    document.getElementById("triangleB").value = "";
    document.getElementById("triangleH").value = "";
  });
// Rectangle Area Calculation
document
  .getElementById("rectangleAreaBtn")
  .addEventListener("click", function () {
    let rectangleW = parseInt(document.getElementById("rectangleW").value) || 0;
    let rectangleL = parseInt(document.getElementById("rectangleL").value) || 0;
    let rectangleArea = calculateArea(rectangleW, rectangleL, 1);

    let resultContainer = document.getElementById("resultContainer");
    let newElement = document.createElement("div");
    count++;
    newElement.innerHTML = createResultElement(
      "Rectangle",
      rectangleArea,
      "cm<sup>2</sup>"
    );

    resultContainer.appendChild(newElement);
    document.getElementById("rectangleW").value = "";
    document.getElementById("rectangleL").value = "";
  });

// Parallelogram Area Calculation
document
  .getElementById("parallelogramAreaBtn")
  .addEventListener("click", function () {
    let parallelogramB =
      parseInt(document.getElementById("parallelogramB").value) || 0;
    let parallelogramH =
      parseInt(document.getElementById("parallelogramH").value) || 0;
    let parallelogramArea = calculateArea(parallelogramB, parallelogramH, 1);
    console.log(parallelogramArea);

    let resultContainer = document.getElementById("resultContainer");
    let newElement = document.createElement("div");
    count++;
    newElement.innerHTML = createResultElement(
      "Parallelogram",
      parallelogramArea,
      "cm<sup>2</sup>"
    );

    resultContainer.appendChild(newElement);
    document.getElementById("parallelogramB").value = "";
    document.getElementById("parallelogramH").value = "";
  });

// Rhombus Area Calculation
document
  .getElementById("rhombusAreaBtn")
  .addEventListener("click", function () {
    let rhombusD1 = parseInt(document.getElementById("rhombusD1").value) || 0;
    let rhombusD2 = parseInt(document.getElementById("rhombusD2").value) || 0;
    let rhombusArea = calculateArea(rhombusD1, rhombusD2, 0.5);
    console.log(rhombusArea);

    let resultContainer = document.getElementById("resultContainer");
    let newElement = document.createElement("div");
    count++;
    newElement.innerHTML = createResultElement(
      "Rhombus",
      rhombusArea,
      "cm<sup>2</sup>"
    );

    resultContainer.appendChild(newElement);
    document.getElementById("rhombusD1").value = "";
    document.getElementById("rhombusD2").value = "";
  });

// Pentagon Area Calculation
document
  .getElementById("pentagonAreaBtn")
  .addEventListener("click", function () {
    let pentagonB = parseInt(document.getElementById("pentagonB").value) || 0;
    let pentagonP = parseInt(document.getElementById("pentagonP").value) || 0;
    let pentagonArea = calculateArea(pentagonB, pentagonP, 0.5);
    console.log(pentagonArea);

    let resultContainer = document.getElementById("resultContainer");
    let newElement = document.createElement("div");
    count++;
    newElement.innerHTML = createResultElement(
      "Pentagon",
      pentagonArea,
      "cm<sup>2</sup>"
    );

    resultContainer.appendChild(newElement);
    document.getElementById("pentagonB").value = "";
    document.getElementById("pentagonP").value = "";
  });
