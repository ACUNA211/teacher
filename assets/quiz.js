/* Teacher: shared quiz widget.

   Markup (one <section class="quiz"> per question):

   <section class="quiz">
     <p class="q">Question text</p>
     <ul class="choices">
       <li><button class="choice">Answer A</button></li>
       <li><button class="choice" data-correct>Answer B</button></li>
     </ul>
     <div class="explain" hidden>Why B is right (shown after any answer).</div>
   </section>

   Rules from `teach`: every choice has the same number of words (and
   roughly the same length) so formatting gives no clues.
   Add <p class="quiz-score" data-quiz-score></p> anywhere to show a running score. */
(function () {
  function init() {
    var quizzes = Array.prototype.slice.call(document.querySelectorAll("section.quiz"));
    var answered = 0, correct = 0;
    var scoreEl = document.querySelector("[data-quiz-score]");

    function renderScore() {
      if (!scoreEl) return;
      scoreEl.textContent = answered === 0
        ? quizzes.length + " questions. Answer from memory before peeking."
        : correct + " / " + answered + " correct" + (answered === quizzes.length ? " (done)" : "");
    }

    quizzes.forEach(function (quiz, i) {
      var q = quiz.querySelector(".q");
      if (q && quizzes.length > 1 && !q.querySelector(".num")) {
        var n = document.createElement("span");
        n.className = "num";
        n.textContent = (i + 1) + ".";
        q.insertBefore(n, q.firstChild);
      }
      var buttons = Array.prototype.slice.call(quiz.querySelectorAll("button.choice"));
      var explain = quiz.querySelector(".explain");
      buttons.forEach(function (btn) {
        btn.type = "button";
        btn.addEventListener("click", function () {
          var isRight = btn.hasAttribute("data-correct");
          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.hasAttribute("data-correct")) b.classList.add("right");
          });
          if (!isRight) btn.classList.add("wrong");
          answered++;
          if (isRight) correct++;
          if (explain) {
            var v = document.createElement("span");
            v.className = "verdict " + (isRight ? "ok" : "no");
            v.textContent = isRight ? "Correct." : "Not quite.";
            explain.insertBefore(v, explain.firstChild);
            explain.hidden = false;
          }
          renderScore();
        });
      });
    });
    renderScore();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
