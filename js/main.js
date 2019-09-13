
        let left = document.querySelector('.left');
        let protos = document.querySelectorAll('.proto');
        let thistext = document.querySelector('.thistext');

        left.addEventListener('mousemove', (event) => {
            let move = (event.clientX * 0.05) + 4;
            let move2 = (event.clientX * 0.003);
            thistext.style.transform = `translateX(-${move2}%)`;

            protos.forEach((proto) => {
                proto.style.transform = `translateX(${move}%)`;
            })
        })
 
