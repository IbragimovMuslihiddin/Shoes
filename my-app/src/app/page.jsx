import CardUser from '@/components/CardUser'
import Image from 'next/image'
import AddUser from '@/components/AddUser'
import axios from 'axios'
const API = 'https://to-dos-api.softclub.tj/api/to-dos'

export async function getData() {
	try {
		const { data } = await axios(API)
		return data
	} catch (error) {
		console.error(error)
	}
}

export default async function Home() {
	const data = await getData()

	return (
		<div className='max-w-[1400px] m-auto'>
			<header className='flex items-center justify-between px-[10%] py-4 bg-white'>
				<Image
					src='/logo.png'
					alt='Margiela Service Logo'
					width={32}
					height={32}
				/>
				<nav className='hidden lg:flex items-center gap-20'>
					<p className='text-gray-600 hover:text-gray-900'>Главная</p>
					<p className='text-gray-600 hover:text-gray-900'>Каталог</p>
					<p className='text-gray-600 hover:text-gray-900'>Доставка и оплата</p>
					<p className='text-gray-600 hover:text-gray-900'>Контакты и отзывы</p>
					<p className='text-gray-600 hover:text-gray-900'>Размеры</p>
				</nav>
				<div className='flex items-center'>
					<button className='hidden lg:block bg-teal-400 text-white px-4 py-2 rounded-lg text-sm'>
						Сделать заказ
					</button>
					<Image
						src='/burger.png'
						alt='Icon'
						width={60}
						height={60}
						className='lg:hidden block'
					/>
				</div>
			</header>

			<section className=' px-0 flex flex-col lg:flex-row items-center justify-between  lg:px-16 py-12 bg-white'>
				<div className='flex flex-col ml-16'>
					<div className='bg-teal-100 text-teal-600 px-3 py-2 rounded-lg text-sm inline-flex items-center w-fit mb-6'>
						Margiela Service
					</div>
					<h1 className='text-5xl md:text-5xl font-semibold mb-6'>
						Margiela Service - <br />
						правильный выбор!
					</h1>
					<p className='text-gray-600 w-[70%] mb-8'>
						После ухода любимых брендов не можете найти себе обувь? Мы решим
						вашу проблему с быстрой доставкой в любую точку страны по выгодной
						цене
					</p>
				</div>
				<div className='relative '>
					<div className="absolute  bg-[url('/bgshoe.png')] w-full h-[300px] bg-center bg-no-repeat bg-cover"></div>

					<Image
						src='/shoe.png'
						alt='Black Margiela Shoe'
						width={900}
						height={500}
						className='relative z-10'
					/>
				</div>
			</section>

			<section className='flex lg:flex-row flex-col items-end px-5 lg:px-16 pt-20 bg-[#57BFC1]'>
				<div className='flex flex-col '>
					<div>
						<div className='mb-2 md:mb-0'>
							<div className='flex items-center gap-2'>
								<Image src='/Group1.png' alt='img' width={50} height={50} />
								<h2 className='bg-[#57BFC1] text-white py-5 text-5xl text-semibold'>
									Акция на первый заказ!
								</h2>
							</div>
							<p className='text-[#F9FFFF80] text-lg '>
								Бесплатная доставка заказанного товара через СДЭК в любой регион
								РФ
							</p>
						</div>

						<div className='flex flex-col-reverse lg:flex-row items-center'>
							<Image
								src='/iPhone 15.png'
								alt='Mobile App'
								width={1400}
								height={900}
								className='mx-auto lg:mx-0'
							/>
							<div className='hidden lg:flex flex-row lg:flex-col gap-5 -ml-[30%] mt-20'>
								<button className='bg-white text-[#57BFC1] px-6 py-3 rounded-md font-bold'>
									Сделать заказ{' '}
								</button>
								<button className='bg-[#70C9CA] border border-white text-white px-6 py-3 rounded-md font-bold'>
									Связаться с нами
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='lg:w-[90%]'>
					<div className='lg:mr-[30%] mt-20'>
						<Image
							src='/Frame 245.png'
							alt='Mobile App'
							width={500}
							height={500}
							className=''
						/>
					</div>
					
					<div className='lg:ml-[30%] mt-20'>
						<Image
							src='/Frame 246.png'
							alt='Mobile App'
							width={500}
							height={500}
							className=''
						/>
					</div>
					<div className='lg:mr-[30%] mt-20'>
						<Image
							src='/Frame 247.png'
							alt='Mobile App'
							width={500}
							height={500}
							className='mb-10'
						/>
					</div>
				</div>
			</section>

			<section className='flex flex-col px-8 lg:px-16 gap-20 lg:py-44 bg-white '>
				<h2 className='text-2xl font-bold mb-12 my-20 lg:my-0 text-center px-20 lg:px-0'>
					Оформление заказа товаров с POZION
				</h2>
				<div className='flex flex-col lg:flex-row justify-between gap-10 '>
					<div className='flex lg:flex-col items-center'>
						<div className='flex items-center mb-4 mx-10'>
							<Image src='/Group 17.png' alt='Icon' width={60} height={60} />
							<Image
								src='/Vector 4.png'
								alt='Icon'
								width={200}
								height={200}
								className='hidden lg:block'
							/>
						</div>
						<p className='text-gray-600 lg:text-sm'>
							Оформление заказа займёт не более 5 минут (мы помогаем
							найти/подобрать товар по фото, определиться с размером)
						</p>
					</div>

					<div className='flex lg:flex-col items-center'>
						<div className='flex items-center mb-4 mx-10'>
							<Image src='/Group 16.png' alt='Icon' width={60} height={60} />
							<Image
								src='/Vector 4.png'
								alt='Icon'
								width={200}
								height={200}
								className='hidden lg:block'
							/>
						</div>
						<p className='text-gray-600 lg:text-sm'>
							Выкуп товара в день оплаты (выкупы происходят круглосуточно)
						</p>
					</div>

					<div className='flex lg:flex-col items-center '>
						<div className='flex items-center mb-4 mx-10'>
							<Image src='/Group 15.png' alt='Icon' width={60} height={60} />
							<Image
								src='/Vector 4.png'
								alt='Icon'
								width={200}
								height={200}
								className='hidden lg:block'
							/>
						</div>
						<p className='text-gray-600 lg:text-sm'>
							По просьбе клиентов мы предоставляем дополнительные фото/видео
							интересующей пары
						</p>
					</div>

					<div className='flex lg:flex-col items-start '>
						<div className='flex items-center mb-4 mx-10'>
							<Image src='/Group 14.png' alt='Icon' width={60} height={60} />
							<Image
								src='/Vector 4.png'
								alt='Icon'
								width={200}
								height={200}
								className='hidden lg:block'
							/>
						</div>
						<p className='text-gray-600 lg:text-sm'>
							Каждый клиент получает от нас трек-номер, по которому сам может
							отслеживать посылку)
						</p>
					</div>
				</div>
			</section>

			<section className='flex flex-col lg:flex-row justify-between px-8 lg:px-16 py-16 bg-gray-50 gap-8'>
				<div className='flex flex-col items-center justify-center gap-5'>
					<h3 className='text-xl font-medium text-center mb-2'>
						Рассчитай стоимость <br /> заказа прямо на сайте
					</h3>
					<button className='border border-[#57BFC1] text-[#57BFC1] px-6 py-3 rounded-full w-fit'>
						Цена на товар в юанях
					</button>
					<button className='border bg-[#D8F2F3] text-[#57BFC1] px-6 py-3 rounded-full w-fit'>
						Обувь{' '}
					</button>
					<p className='text-[23px] font-semibold text-center'>
						Итоговая стоимость: 3500₽
					</p>
					<p className='text-[gray] text-sm text-center'>С учётом доставки</p>
				</div>
				<Image
					src='/Frame 12.png'
					alt='Mobile App'
					width={800}
					height={800}
					className='hidden lg:block'
				/>
				<Image
					src='/Frame 286.png'
					alt='Mobile App'
					width={800}
					height={800}
					className='lg:hidden block '
				/>
			</section>

			{/* todolist */}
			<section className=' px-8 lg:px-16 py-16'>
				<h2 className='text-2xl text-center my-10'>
					Товары в наличии на складе{' '}
					<span className='font-bold'>в Москвее</span>
				</h2>
			

				<div className='flex flex-wrap justify-center lg:justify-start items-center gap-10 lg:gap-10'>
					<div>
						<AddUser />
						<div className='flex flex-wrap gap-6 justify-center'>
							{data?.data?.map(e => (
								<CardUser e={e} key={e.id} />
							))}
						</div>
					</div>
				</div>
			</section>

			<section className=' py-16 lg:px-20 px-10'>
				<h2 className='text-2xl sm:text-3xl font-semibold text-center mb-12'>
					Ответы на часто задаваемые вопросы
				</h2>

				<div className='flex lg:flex-row flex-col justify-center items-start gap-6'>
					<div>
						<div className='bg-[#E1F5F6] rounded-2xl p-6 w-full flex items-start shadow-sm my-10'>
							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Что такое Poizon?
								</h3>
								<p className='text-sm'>
									Poizon — китайский маркетплейс с гигантским ассортиментом
									брендовых кроссовок и одежды, в том числе лимитированных
									выпусков и коллабораций: 95% товаров невозможно найти в
									России.
									<br />
									<br />
									Помимо гигантского ассортимента Poizon предлагает цены на
									оригинальную продукцию в 2–3 раза ниже, чем в России, поэтому
									он так интересен россиянам.
									<br />
									<br />
									Ключевая проблема — Poizon работает только на территории
									Китая, поэтому функцию доставки в Россию осуществляем мы, как
									посредник, за небольшую комиссию.
								</p>
							</div>
							<Image
								src='/Group 37117.png'
								alt='Plus Icon'
								width={30}
								height={30}
								className='mt-1 shrink-0'
							/>
						</div>
						<div className='bg-[#E1F5F6] rounded-2xl p-6 w-full  flex justify-between items-start shadow-sm'>
							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Можно ли заказать товар, которого нет у вас в ассортименте?
								</h3>
								<p className='text-sm'>
									Да, конечно. Если вы не нашли нужного товара в нашем
									ассортименте — мы можем предложить оформить заказ со склада в
									Китае. Из Китая в Москву товар идет от 5 до 15 дней. С учетом
									времени на выкуп и доставку до нужного города, товары обычно
									приходят нашим клиентам за 2 недели.
								</p>
							</div>
							<Image
								src='/Group 37117.png'
								alt='Plus Icon'
								width={30}
								height={30}
								className='mt-1 shrink-0'
							/>
						</div>
					</div>
					<div>
						<div className='bg-[#E1F5F6] rounded-2xl p-6 w-full  flex justify-between items-start shadow-sm mt-10'>
							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Сколько по времени занимает доставка с нашего склада?
								</h3>
								<p className='text-sm'>
									Да, конечно. Если вы не нашли нужного товара в нашем
									ассортименте – мы можем предложить оформить заказ со склада в
									Китаее. Из Китая в Москву товар идет от 5 до 15 дней. С учетом
									времени на выкуп и доставку до нужного города, товары обычно
									приходят нашим клиентам за 2 недели.
								</p>
							</div>
							<Image
								src='/Group 37117.png'
								alt='Plus Icon'
								width={30}
								height={30}
								className='mt-1 shrink-0'
							/>
						</div>
						<div className='bg-[#E1F5F6] rounded-2xl p-6 w-full  flex justify-between items-start shadow-sm my-10'>
							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Вы предоставляете оригинальные товары?
								</h3>
								<p className='text-sm'>
									У нас вы найдете только оригинальную продукцию. Наши крепкие
									связи с поставщиками из Европы и Китая, проверены временем и
									ни одной сотней поставок.
								</p>
							</div>
							<Image
								src='/Group 37117.png'
								alt='Plus Icon'
								width={30}
								height={30}
								className='mt-1 '
							/>
						</div>
						<div className='bg-[#E1F5F6] rounded-2xl p-6 w-full  flex justify-between items-start shadow-sm'>
							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Вы предоставляете оригинальные товары?
								</h3>
								<p className='text-sm'>
									Да, мы предоставляем только оригинальные товары, напрямую от
									поставщиков из Китая и Европы.
								</p>
							</div>
							<Image
								src='/Group 37117.png'
								alt='Plus Icon'
								width={30}
								height={30}
								className='mt-1 shrink-0'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-[#F0FBFA] lg:px-20 px-10 py-16 flex flex-col lg:flex-row lg:items-start justify-center items-center lg:gap-10 gap-5'>
				<div className='bg-white rounded-xl shadow-sm '>
					<table className='table-auto border-collapse text-sm text-center leading-loose'>
						<thead>
							<tr className='bg-[#57BFC1] text-white'>
								<th className='px-6 py-3 '>Размер EU</th>
								<th className='px-6 py-3'>Размер стопы</th>
							</tr>
						</thead>
						<tbody className=' text-[#57BFC1]'>
							<tr>
								<td className='px-6 py-2'>36</td>
								<td className='px-6 py-2'>22.5 см</td>
							</tr>
							<tr className='bg-[#F5F5F5]'>
								<td className='px-6 py-2'>37</td>
								<td className='px-6 py-2'>23 см</td>
							</tr>
							<tr>
								<td className='px-6 py-2'>38</td>
								<td className='px-6 py-2'>24 см</td>
							</tr>
							<tr className='bg-[#F5F5F5]'>
								<td className='px-6 py-2'>39</td>
								<td className='px-6 py-2'>24.5 см</td>
							</tr>
							<tr>
								<td className='px-6 py-2'>40</td>
								<td className='px-6 py-2'>25 см</td>
							</tr>
							<tr className='bg-[#F5F5F5]'>
								<td className='px-6 py-2'>41</td>
								<td className='px-6 py-2'>25.5 см</td>
							</tr>
							<tr>
								<td className='px-6 py-2'>42</td>
								<td className='px-6 py-2'>26.5 см</td>
							</tr>
							<tr className='bg-[#F5F5F5]'>
								<td className='px-6 py-2'>43</td>
								<td className='px-6 py-2'>27.5 см</td>
							</tr>
							<tr>
								<td className='px-6 py-2'>44</td>
								<td className='px-6 py-2'>28 см</td>
							</tr>
							<tr className='bg-[#F5F5F5]'>
								<td className='px-6 py-2'>45</td>
								<td className='px-6 py-2'>29 см</td>
							</tr>
							<tr>
								<td className='px-6 py-2'>46</td>
								<td className='px-6 py-2'>30 см</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='flex flex-col items-start lg:w-[30%]'>
					<h2 className='lg:text-xl text-2xl font-semibold mb-6'>
						Как правильно подобрать размер обуви?
					</h2>
					<div className='text-sm  flex  flex-col lg:gap-20 gap-10'>
						<div className='flex items-center gap-5'>
							<Image src='/Group 17.png' alt='Icon' width={40} height={40} />

							<p>Поставь ногу на лист бумаги так, чтобы пятка касалась стены</p>
						</div>
						<div className='flex items-center gap-5'>
							<Image src='/Group 16.png' alt='Icon' width={40} height={40} />

							<p>Поставь ногу на лист бумаги так, чтобы пятка касалась стены</p>
						</div>
						<div className='flex items-center gap-5'>
							<Image src='/Group 15.png' alt='Icon' width={40} height={40} />

							<p>Поставь ногу на лист бумаги так, чтобы пятка касалась стены</p>
						</div>
						<div className='flex items-center gap-5'>
							<Image src='/Group 14.png' alt='Icon' width={40} height={40} />

							<p>Поставь ногу на лист бумаги так, чтобы пятка касалась стены</p>
						</div>
					</div>
					<p className='mt-6 text-xs text-[#666]'>
						Узнав больший размер своей стопы в см, обратись к нашей таблице и
						найди свой размер
					</p>
				</div>
				<Image
					src='/shoe.png'
					alt='Black Shoe'
					width={450}
					height={400}
					className=''
				/>
			</section>

			<footer className='bg-black text-white lg:px-20 px-10 py-10'>
				<div className='flex  gap-3 '>
					<Image
						src='/logo.png'
						alt='Plus Icon'
						width={30}
						height={30}
						className=''
					/>
					<p className='font-bold text-lg'>MARGIELA SERVICE</p>
				</div>
				<div className='text-[#7F8787] flex flex-wrap justify-between my-10'>
					<nav className='flex  flex-wrap   gap-4 text-sm'>
						<p>Главная</p>
						<p>Акции</p>
						<p>Оформление заказа</p>
						<p>Калькулятор стоимости</p>
						<p>Товары в Москве</p>
						<p>FAQ</p>
						<p>Таблица размеров</p>
					</nav>
					<button className='bg-white text-black px-4 py-2 text-sm rounded mt-6 lg:mt-0'>
						Сделать заказ
					</button>
				</div>

				<hr className='text-[#7F8787]' />
				<div className='flex lg:flex-row flex-col justify-between'>
					<p className='text-xs mt-6 text-gray-400'>
						Designed with love by Mifka design agency
					</p>
					<p className='text-xs mt-6 text-gray-400'>
						Все права защищены © 2023
					</p>
				</div>
			</footer>
		</div>
	)
}
