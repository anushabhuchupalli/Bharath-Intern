    let cel = document.getElementById("cel");
    let far = document.getElementById("far");
    let kel = document.getElementById("kel");

    cel.addEventListener("input", function () {
      let c = this.value;
      let f = (c * 9) / 5 + 32;
      let k = parseFloat(c) + 273.15;

      if (!Number.isInteger(f)) {
        f = f.toFixed(3);
      }

      if (!Number.isInteger(k)) {
        k = k.toFixed(3);
      }

      far.value = f;
      kel.value = k;
    });

    far.addEventListener("input", function () {
      let f = this.value;
      let c = ((f - 32) * 5) / 9;
      let k = (parseFloat(c) + 273.15);

      if (!Number.isInteger(c)) {
        c = c.toFixed(3);
      }

      if (!Number.isInteger(k)) {
        k = k.toFixed(3);
      }

      cel.value = c;
      kel.value = k;
    });

    kel.addEventListener("input", function () {
      let k = this.value;
      let c = parseFloat(k) - 273.15;
      let f = (c * 9) / 5 + 32;

      if (!Number.isInteger(c)) {
        c = c.toFixed(3);
      }

      if (!Number.isInteger(f)) {
        f = f.toFixed(3);
      }

      cel.value = c;
      far.value = f;
    });
