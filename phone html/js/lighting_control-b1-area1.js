let lights = document.querySelectorAll("#lights>[id^=light]");
lights.forEach(
    light =>
    {
        //找出開關的選項(開啟 關閉)
        let options = light.querySelectorAll("#options button");

        //選項原本的背景顏色
        let backgroundColor = options[0].style.backgroundColor;

        //點擊開關的其中一個選項後其他選項要變回原本的顏色

        //選項1(開啟)
        options[0].addEventListener("click", () =>
        {
            options[1].style.backgroundColor = backgroundColor;
            options[0].style.backgroundColor = "#0F0";
        }
        );

        //選項2(關閉)
        options[1].addEventListener("click", () =>
        {
            options[0].style.backgroundColor = backgroundColor;
            options[1].style.backgroundColor = "#F00";
        }
        );
    }
);
