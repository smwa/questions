const container = document.querySelector("#all_questions")
const template = document.querySelector("#question_template")

counter = 1

questions.forEach(element => {
    const clone = template.content.cloneNode(true)
    const questionHtmlId = "question" + counter
    clone.querySelector(".question-id").innerHTML = "" + counter + "."
    clone.querySelector(".question").innerHTML = element[0]
    clone.querySelector("label.question").setAttribute("for", questionHtmlId)
    clone.querySelector(".input").id = questionHtmlId
    clone.querySelector(".input").oninput = (e) => {
        const input = e.target
        console.log(e.target.value)
        if (input.value == "") {
            input.classList.remove("is-invalid")
            input.classList.remove("is-valid")
        }
        else if (input.value == element[1]) {
            input.classList.remove("is-invalid")
            input.classList.add("is-valid")
        }
        else {
            input.classList.add("is-invalid")
            input.classList.remove("is-valid")
        }
    }
    clone.querySelector(".answer").innerHTML = element[1]
    clone.querySelector(".reveal-answer").onclick = (e) => {
        e.target.parentNode.querySelector(".answer").classList.remove("invisible")
    }
    container.appendChild(clone)
    counter += 1
})
