const Oracoes = ({ title, oracoes }) =>
	<section className="oracoes">
		<h2>{title}</h2>
		{oracoes.map((o, i) =>
      <p key={i}>{o}</p>
		)}
	</section>

export default Oracoes