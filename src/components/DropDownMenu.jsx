import React from 'react'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'

const DropDown = styled.div`
  position: 'relative';
`
const MenuButton = styled.button`
  display: 'block';
  border: '1px solid black';
  border-radius: '12px';
  padding: '3px 5px';
  cursor: pointer;
`

const MenuBox = styled.button`
  position: 'absolute';
  top: '80px';
  width: '120px';
  z-index: 1;
  cursor: 'pointer';
  border: '1px solid black';
`

const MenuContent = styled.div`
  padding: '3px 5px';
  border-bottom: '1px solid black';
`
const LastMenuContent = styled.div`
  padding: '3px 5px';
`

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }))
  }

  handleClickMenu(val) {
    this.setState({
      listOpen: false,
    })
    alert(val)
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }

  render() {
    const { listOpen } = this.state
    return (
      <div>
        <DropDown>
          <MenuButton onClick={this.toggleList.bind(this)}>
            menu
          </MenuButton>
          {listOpen && (
            <MenuBox>
              <MenuContent>
                <div
                  onClick={this.handleClickMenu.bind(
                    this,
                    1
                  )}
                >
                  menu 1
                </div>
              </MenuContent>
              <MenuContent>
                <div
                  onClick={this.handleClickMenu.bind(
                    this,
                    2
                  )}
                >
                  menu 2
                </div>
              </MenuContent>
              <LastMenuContent>
                <div
                  onClick={this.handleClickMenu.bind(
                    this,
                    3
                  )}
                >
                  menu 3
                </div>
              </LastMenuContent>
            </MenuBox>
          )}
        </DropDown>
      </div>
    )
  }
}

export default onClickOutside(DropDownMenu)
