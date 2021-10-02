const inputs = document.querySelectorAll('.controls input')

function handleUpdtate(){
    const suffix = this.dataset.sizing || '';
    console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix))
}

inputs.forEach(input => input.addEventListener('change', handleUpdtate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdtate))