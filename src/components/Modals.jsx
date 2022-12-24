export default ({ member, handleClose, memberJump }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ width: '200px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
              <hgroup style={{marginTop: "10px"}}>
                <button style={{width: "140px", height: "70px", display: "inline-block"}} onClick={() => memberJump(-1)}>&larr; Previous</button>
                <button style={{width: "140px", height: "70px", display: "inline-block", marginLeft: "20px"}} onClick={() => memberJump(1)}>Next &rarr;</button>
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  )
}
