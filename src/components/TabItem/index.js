import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    updatedActiveTabId(tabId)
  }

  const activeTabClass = isActive ? `active-tab-btn` : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
