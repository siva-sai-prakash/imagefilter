let buttons = document.querySelectorAll('.btn');

let imgs = document.querySelectorAll('img');

buttons.forEach(
    function (button){
        function filterItems(){
            const value = button.dataset.group;
            imgs.forEach(
                function(img){
                    const value2 = img.dataset.item;
                    if (value === 'all'){
                        img.style.display= '';
                    }
                    else{
                        if (value === value2){
                            img.style.display = '';
                        }else{
                            img.style.display = 'none';
                        }
                    }
                }
            )
        }
        button.addEventListener('click', filterItems);
    }
)