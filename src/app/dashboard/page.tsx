import { redirect } from "next/navigation"
import styles from "./Dashboard.module.css"
import { getServerSession } from "next-auth"

async function page() {
    const session = await getServerSession()

    if (!session) {
        redirect("/")
    }
    return (
        <main>
            <h1>Bem vindo ao dashboard {session?.user?.name}!</h1>
            <section>
                <h2>Informações Básicas</h2>
                <div>
                    <label htmlFor="tmdb_id">TMDB ID</label>
                    <input type="text" name="tmdb_id" id="tmdb_id" />
                </div>
                <div>
                    <label htmlFor="filme">Filme</label>
                    <input type="radio" name="filme" id="filme" />

                    <label htmlFor="serie">Série</label>
                    <input type="radio" name="serie" id="serie" />
                </div>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <div>
                        <label htmlFor="original_title">Título original</label>
                        <input type="text" name="original_title" id="original_title" />
                    </div>
                    <div>
                        <label htmlFor="year">Ano</label>
                        <input type="number" name="year" id="year" />
                    </div>
                </div>
                <div>
                    <label htmlFor="trailer_youtube">Trailer YouTube</label>
                    <input type="url" name="trailer_youtube" id="trailer_youtube" />
                </div>
                <h2>Imagens</h2>
                <div>
                    <label htmlFor="backdrop">Backdrop</label>
                    <input type="url" name="backdrop" id="backdrop" />
                </div>
                <div>
                    <label htmlFor="poster">Poster</label>
                    <input type="url" name="poster" id="poster" />
                </div>
                <h2>Gêneros</h2>
                <div>
                    <input type="checkbox" name="genre" id="acao" value="Ação"/>
                    <label htmlFor="acao">Ação</label>
                    <input type="checkbox" name="genre" id="aventura" value="Aventura"/>
                    <label htmlFor="aventura">Aventura</label>
                    <input type="checkbox" name="genre" id="animacao" value="Animação"/>
                    <label htmlFor="animacao">Animação</label>
                    <input type="checkbox" name="genre" id="crime" value="Crime"/>
                    <label htmlFor="crime">Crime</label>
                    <input type="checkbox" name="genre" id="drama" value="Drama"/>
                    <label htmlFor="drama">Drama</label>
                </div>
                <h2>Avaliação e Classificação</h2>
                <div>
                    <label htmlFor="tmdb_rate">Avaliação TMDB</label>
                    <input type="range" name="" id="" />
                </div>
                <div>
                    <h3>Faixa Etária</h3>
                    <div>
                        <label htmlFor="livre">L</label>
                        <input type="checkbox" name="classification" id="livre" value="L"/>

                        <label htmlFor="dez">10</label>
                        <input type="checkbox" name="classification" id="dez" value="10"/>

                        <label htmlFor="doze">12</label>
                        <input type="checkbox" name="classification" id="doze" value="12"/>

                        <label htmlFor="catorze">14</label>
                        <input type="checkbox" name="classification" id="catorze" value="14"/>

                        <label htmlFor="dezesseis">16</label>
                        <input type="checkbox" name="classification" id="dezesseis" value="16"/>

                        <label htmlFor="dezoito">18</label>
                        <input type="checkbox" name="classification" id="dezoito" value="18"/>
                    </div>
                </div>
                <div>
                    <h3>Idiomas</h3>
                    <div>
                        <label htmlFor="ingles">Inglês</label>
                        <input type="checkbox" name="language" id="ingles" />

                        <label htmlFor="portuguese">Português</label>
                        <input type="checkbox" name="language" id="portuguese" />
                    </div>
                </div>

                <div>
                    <h2>Especificações</h2>
                    <div>
                        <label htmlFor="duration">Duração</label>
                        <input type="text" name="duration" id="duration" />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="format">Formato</label>
                            <input type="text" name="format" id="format" />
                        </div>
                        <div>
                            <label htmlFor="size">Tamanho</label>
                            <input type="text" name="size" id="size" />
                        </div>
                    </div>
                </div>
            </section>
            <button>Salvar Conteúdo</button>
        </main>
    )
}

export default page