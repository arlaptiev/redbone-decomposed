import AudioMotionAnalyzer from 'audiomotion-analyzer'

// eslint-disable-next-line no-unused-vars
const audioMotion1 = new AudioMotionAnalyzer(
  document.getElementById('container0'),
  {
    source: document.getElementById('audio0')
  }
)
// eslint-disable-next-line no-unused-vars
const audioMotion2 = new AudioMotionAnalyzer(
  document.getElementById('container1'),
  {
    source: document.getElementById('audio1')
  }
)
