import { _decorator, Component, Node, Sprite, Button, Label, Vec3, Vec2 } from 'cc';
const { ccclass, property } = _decorator;
import { eventPrefab } from './pixel';
import { Map } from './Map';

@ccclass('MainGame')
export class MainGame extends Component {
    @property(Sprite)
    note : Sprite = null;
    @property(Sprite)
    exit : Sprite =  null;
    @property(Button)
    btn : Button = null;
    @property(Button)
    btnComfirm : Button = null;
    @property(Button)
    btnExit : Button = null;
    @property(Label)
    lbX : Label = null;
    @property(Label)
    lbY : Label = null;
    @property(Node)
    nodebtn1: Node = null;
    @property(Node)
    nodebtn2: Node = null;
    
    @property(Label)
    result : Label = null;
  

    

    public static notice : MainGame = null;
    static MainGame: Sprite;

    onLoad(){
        MainGame.notice = this;
        this.btn.node.on(Button.EventType.CLICK, this.onClick , this);
        this.btnExit.node.on(Button.EventType.CLICK, this.onbtnExit, this);
        this.btnComfirm.node.on(Button.EventType.CLICK, this.onbtnCom, this);
    }
    start() {
        
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        this.result.enabled = false;
        Map.notice1.setFlag.active = false;

        

    }

    update(deltaTime: number) {
        
    }
    onClick(button: Button){
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        Map.notice1.setFlag.active = false;

        // this.setFlag.active = true;


    }
    onbtnExit(button: Button){
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        Map.notice1.setFlag.active = false;

        // this.setFlag.active = true;

        
    }
    onbtnCom(button: Button){
        // this.setFlag.active = true;
        Map.notice1.setFlag.active = true;
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        // this.setFlag.setPosition(eventPrefab.idselect.setFlagX, eventPrefab.idselect.setFlagY);
        // this.setFlag.setPosition(this.setFlagX - 5,this.setFlagY + 40);
        Map.notice1.setFlag.setPosition(Map.notice1.setFlagX,Map.notice1.setFlagY )
        this.result.enabled = true;
        this.result.string = this.lbX.string + this.lbY.string;
        // console.log("setFlag", eventPrefab.idselect.setFlag);
        // console.log("idselect.setX", eventPrefab.idselect.setFlagX);
        // console.log("idselect.setY", eventPrefab.idselect.setFlagY);
    }
}

