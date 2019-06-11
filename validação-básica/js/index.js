const validation = () => {
  const numberValue = document.getElementById("number").value;

  if (numberValue.length > 2) {
    alert("Você digitou um número que tem mais de 2 algarismos.");
    return false;
  }
  if (numberValue.length == 1) {
    alert("Você digitou um número que tem apenas 1 algarismo.");
    return false;
  } else {
    return true;
  }
};
