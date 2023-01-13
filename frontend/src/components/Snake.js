import React, {Component} from 'react';
import '../css/Snake.css';

const  HEIGHT = 10;
const  WIDTH  = 10;

const LEFT  = 37; 
const UP    = 38;
const RIGHT = 39; 
const DOWN  = 40;
const STOP  = 32;

const getRandom = () => {
    return  { 
        x: Math.floor(Math.random() * WIDTH),
        y: Math.floor(Math.random() * HEIGHT) 
    }
}

const emptyRows = () => [...Array(WIDTH)].map((_) => [...Array(HEIGHT)].map((_)=> 'grid-item'));

const increaseSpeed = (speed) => speed - 10 *(speed > 10);

const initialState = {
    rows: emptyRows(),
    snake: [getRandom()],
    food: getRandom(),
    direction: STOP,
    speed: 100,
}

class Snake extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

    componentDidMount() {
        setInterval(this.movement, this.state.speed);
        document.onkeydown = this.changeDirection;
        document.title = "Snake Game";
    }

    componentDidUpdate() {
        this.characterDeath();
        this.correctAnswer();
    }

    movement = () => {
        let snakeCopy = [...this.state.snake];
        let head  =  {...snakeCopy[snakeCopy.length-1]};
        switch (this.state.direction) {
            case LEFT:  head.y += -1; break;    
            case UP:    head.x += -1; break;
            case RIGHT: head.y += 1;  break;
            case DOWN:  head.x += 1;  break;
            default: return;
        }

        head.x += HEIGHT * ((head.x < 0)-(head.x >= HEIGHT));
        head.y += WIDTH * ((head.y < 0)-(head.y >= WIDTH));
        
        snakeCopy.push(head); 
        snakeCopy.shift()
        this.setState({
            snake: snakeCopy,
            head: head
        });
        this.update(); 
    }   
    
    correctAnswer() {
        let snakeCopy  = [...this.state.snake];
        let head  =  {...snakeCopy[snakeCopy.length - 1]};
        let food = this.state.food;
        if ((head.x === food.x) && (head.y === food.y)) {
            snakeCopy.push(head);
            this.setState({
                snake: snakeCopy,
                food: getRandom(),
                speed: increaseSpeed(this.state.speed) 
            });
        } 
    }

    update() {
        let newRows = emptyRows(); 
        this.state.snake.forEach(element => newRows[element.x][element.y] = 'snake')
        newRows[this.state.food.x][this.state.food.y] = 'food';
        this.setState({rows: newRows});
    }

    characterDeath = () => {
        let snake = this.state.snake;
        let head  = {...snake[snake.length - 1]} 
        for (let i = 0; i < snake.length - 3; i++) {
            if ((head.x === snake[i].x) && (head.y === snake[i].y)) {
                this.setState(initialState);
                alert(`game over: ${snake.length}`)
            }
        }
    }

    /* Changes the direction the snake is moving based on the keyboard input.
    Can't go back the direction you are coming from. ex. Checks if already going RIGHT before changing direction to LEFT. */
    changeDirection = ({keyCode}) => { 
        let direction = this.state.direction;
        switch (keyCode) {
            case LEFT:
                direction = (direction === RIGHT)? RIGHT: LEFT;
                break;
            case RIGHT:
                direction = (direction === LEFT)? LEFT: RIGHT;
                break;
            case UP:
                direction = (direction === DOWN)? DOWN: UP;
                break;
            case DOWN:
                direction = (direction === UP)? UP: DOWN;
                break;
            case STOP:
                direction = STOP;
                break;
            default:
                break;
        }
        this.setState({
            direction: direction
        });
    }    
   
    render() {
        const displayRows = this.state.rows.map((row, i) => row.map((value, j) =>  <div name={`${i}=${j}`} className={value} />))
        return (
            <div className="a">
                <div id="questions">
                    <p>This is where the questions will go.</p>
                    <p>And the options somewhere here.</p>
                </div>
                <div className="snake-container">
                    <div className="grid">{displayRows}</div>
                </div>
                <div id="score">
                    <p>Score: </p>
                </div>
            </div>
        )    
    }
}

export default Snake;