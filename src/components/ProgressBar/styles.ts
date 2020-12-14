import styled from 'styled-components'

const Style = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid red 1px;

  div {
    margin-bottom: 64px;

    button {
      width: 100px;
      padding: 16px;
      border-radius: 8px;

      color: white;
      background: linear-gradient(135deg, #c162d2 20%, #329dff 100%);
      box-shadow: -8px 8px 4px 2px rgba(0, 0, 0, 0.2);
    }

    button + button {
      margin-left: 24px;
    }
  }

  svg {
    path.checkIcon {
      fill: #fcfcfc;
    }

    path.errorIcon {
      stroke: #fcfcfc;
      stroke-width: 3;
    }
  }
`

export default Style

Style.displayName = 'Progress-Style'
