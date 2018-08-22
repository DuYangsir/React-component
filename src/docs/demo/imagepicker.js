import React, { Component } from 'react'
import { ImagePicker } from '../../components/index'

const data = [
  {
    url:
      'https://gbres.dfcfw.com/Files/picture/20180820/950C022A45DE9696DCB4ED93837A03B0.png',
    id: '2121'
  },
  {
    url:
      'http://gbres.dfcfw.com/Files/picture/20170911/F23536BA201124069E9518F21026E4C1.png',
    id: '2122'
  }
]

class ImagePickerDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: data,
      multiple: false
    }
  }
  onChange = (files, type, index) => {
    this.setState({
      files
    })
  }
  render() {
    const { files } = this.state
    return (
      <div>
        <div className="title">图片上传</div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </div>
    )
  }
}

export default ImagePickerDemo
