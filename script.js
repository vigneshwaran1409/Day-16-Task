setTimeout(() => {
    document.getElementById("callback hell").innerText = "10";
    setTimeout(() => {
      document.getElementById("callback hell").innerText = "9";
      setTimeout(() => {
        document.getElementById("callback hell").innerText = "8";
        setTimeout(() => {
          document.getElementById("callback hell").innerText = "7";
          setTimeout(() => {
            document.getElementById("callback hell").innerText = "6";
            setTimeout(() => {
              document.getElementById("callback hell").innerText = "5";
              setTimeout(() => {
                document.getElementById("callback hell").innerText = "4";
                setTimeout(() => {
                  document.getElementById("callback hell").innerText = "3";
                  setTimeout(() => {
                    document.getElementById("callback hell").innerText = "2";
                    setTimeout(() => {
                      document.getElementById("callback hell").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("callback hell").innerText =
                          "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);