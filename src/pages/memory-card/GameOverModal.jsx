import Modal from "../../components/memory-card/Modal";

export default function GameOverModal() {
  
  return (
    <Modal fontname='Madimi One'>
      {console.log(`render GameOverModal`)}
      <div className="modal-contact">
        <div>YOU LOSE!!</div>
        <button>restart</button>
      </div>
    </Modal>
  )
}