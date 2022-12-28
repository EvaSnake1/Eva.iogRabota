const firstInput=document.getElementById("firstInput");
const secondInput=document.getElementById("secondInput");
firstInput.addEventListener("input", check);
secondInput.addEventListener("input", check2);
function check() {
    if (this.value === secondInput.value)
{
    firstInput.style.backgroundColor = "#228B22";
    secondInput.style.backgroundColor = "#228B22";
}
else
{
    firstInput.style.backgroundColor  = "#FA8072";
    secondInput.style.backgroundColor = "#FA8072";
}
}
function check2() {
    if (this.value === firstInput.value)
{
    firstInput.style.backgroundColor = "#228B22";
    secondInput.style.backgroundColor = "#228B22";
}
else
{
    firstInput.style.backgroundColor  = "#FA8072";
    secondInput.style.backgroundColor = "#FA8072";
}
}
