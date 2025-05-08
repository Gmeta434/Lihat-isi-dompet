const out = document.querySelector("#output")
const depo = document.querySelector("#depo")
const widrawl = document.querySelector("#widrawl")
const tombolwd = document.querySelector("#tombolwd")
const tomboldepo = document.querySelector("#tomboldepo")
const seMoney = document.querySelector("#see")

class newAcount {
    #jumlahUang
    theData(allmoney, acount) {
        this.#jumlahUang = allmoney
        this.acount = acount
    };

    seMoney() {
        this.clearOutput()
        out.textContent = this.#jumlahUang
    }

    deposit() {
        this.clearOutput()
        let many = depo.value
        if(isNaN(many) || many.trim() === "") {
            out.textContent = "invalid input please corect input"
            return;
        }
        many = parseFloat(many)
        this.#jumlahUang += many
        out.textContent = `hey bro you was depo ${many} and now your mony ${this.#jumlahUang}`
        depo.value = ""
        return;
    }

    wd() {
        this.clearOutput()
        let many = widrawl.value
        if(isNaN(many) || many.trim() === "") {
            out.textContent = "invalid input please corect input"
            return;
        }

        if(many > this.#jumlahUang) {
            console.log('not')
            out.textContent = `your money is not enaf`
            widrawl.value = ""
            return
        }
        many = parseFloat(many)
        this.#jumlahUang -= many
        out.textContent = `hey bro you was wd ${many} and now you have ${this.#jumlahUang}`
        widrawl.value = ""
        return
    }

    clearOutput() {
        console.log('this is clear')
        out.innerHTML = " ";
    }
}
const alia = new newAcount()
alia.theData(5000, "alia")

seMoney.addEventListener('click' ,() => {
    alia.seMoney()
})

tomboldepo.addEventListener('click', () => {
    alia.deposit()
})

tombolwd.addEventListener('click', () => {
    alia.wd()
})