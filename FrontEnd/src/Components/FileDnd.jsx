import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export default function FileDnd({ files, setFiles }) {
  return (
    <FilePond
      className={"!bg-white"}
      allowMultiple={false}
      files={files}
      onupdatefiles={setFiles}
      acceptedFileTypes={["image/*"]}
      labelIdle={`
        <div class="filepond-image">
        <div class="filepond-image-svg" />
            <p class="filepond-label">Drag and drop your files here <br/> or </br> <span class="filepond--label-action"> Browse File</span></p>
        </div>
        `}
    />
  );
}
