import './index.css'

const ThumbnailItem = props => {
  const {value, uniqueKey, thumbnailUrl, thumbnailAltText, changeId} = props
  let classNameThumbnail
  if (value === uniqueKey) {
    classNameThumbnail = 'opacity'
  } else {
    classNameThumbnail = ''
  }
  const onClick = () => {
    changeId(uniqueKey)
  }
  return (
    <li key={uniqueKey} className="list">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${classNameThumbnail}`}
          onClick={onClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
