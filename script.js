const enqueueBtn = document.getElementById('enqueueBtn');
const dequeueBtn = document.getElementById('dequeueBtn');
const peek = document.getElementById('peekBtn');
const peekRes = document.querySelector('.peekRes');
let count = 0;

const queueContainer = document.getElementById('queue');


function animate_slide(elem){
    elem.style.right = "100%"
}


let counter = 1;
const MAX_QUEUE_SIZE = 5; // Maximum number of items in the queue

// Add a new item to the queue
enqueueBtn.addEventListener('click', () => {
    const queueItems = queueContainer.children.length;

    if (queueItems < MAX_QUEUE_SIZE) {

        const newItem = document.createElement('div');
        newItem.classList.add('queue-item');
        newItem.textContent = `Item ${counter++}`;
        queueContainer.appendChild(newItem);


        // Scroll to show the new item
        // queueContainer.scrollLeft = queueContainer.scrollWidth;
    } else {
        alert('Queue Overflow! Maximum queue size is 5.');
    }
});

// Remove the first item from the queue
dequeueBtn.addEventListener('click', () => {
    if (queueContainer.firstChild) {
        const firstItem = queueContainer.firstChild;
        firstItem.style.animation = 'fadeOut 0.5s ease';
        firstItem.addEventListener('animationend', () => {
            firstItem.remove();
            count = 0;
        });
    } else {
        alert('Queue Underflow! The queue is empty.');
    }
});

// Fade-out animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.9);
        }
    }
`;
document.head.appendChild(style);


peek.addEventListener('click',()=>{

    if (queueContainer.firstChild && count === 0) {
        let elem = queueContainer.firstChild.cloneNode(true);
        elem.style.animation = "fadeIn"
        peekRes.replaceChildren(elem)

        count = 1
    }
    else if(count === 1){
        
    }
    else{
        peekRes.innerHTML = '';
        alert('Queue Underflow! The queue is empty.');
    }

})