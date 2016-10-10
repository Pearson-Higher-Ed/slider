import MySlider from '../main';

function init() {

  document.body.dispatchEvent(new CustomEvent('o.InitMySliderComponent', {
    detail: {
      elementId: 'demo-target1'
    }
  }));

  new MySlider({
    elementId: 'demo-target2'
  });

}

window.onload = init;
