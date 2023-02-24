import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client";

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'url'
    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
