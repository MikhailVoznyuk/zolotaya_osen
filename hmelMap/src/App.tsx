import VectorMap from "@/components/VectorMap/VectorMap.tsx";
import './App.css';
import GlassBlock from "@/components/GlassBlock/GlassBlock.tsx";
import TextSection from "@/components/TextSection/TextSection.tsx";
import GlassCard from "@/components/GlassCard/GlassCard.tsx";
import Navigation from "@/components/Navigation/Navigation.tsx";

function App() {

  return (
      <>

          <div className='fixed top-0 left-0 w-full h-full'>

              <div className='w-full h-full bg-[url("/background.jpg")] bg-cover' />
              <div className='fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.8)]'></div>
          </div>
          <div className='relative'>
              <Navigation />
              <div className='flex mt-10' id='map'>
                  <VectorMap />
              </div>
              <div className={'w-screen h-32 bg-linear-to-b from-white to-transparent  relative -top-0.5'} />
              <TextSection title='Интерактивная карта терруаров по возделыванию хмеля и производства хмелесырья' />
              <div className='flex px-10 gap-10 mb-20 flex-wrap justify-center mx-2'>
                  <GlassBlock size='sm' title={'Что это такое?'} text={' Интерактивная карта-система визуализации на основе  авторского методического подхода, позволяющего оценить  возможности производства хмелесырья и хмелепродуктов в Российской Федерации и Республики Беларусь с учетом природно- климатических условий, агробиологических особенностей хмеля и эффективного использования имеющихся ресурсов в терруарах.\n'} />
                  <GlassBlock size='sm' title={'Для чего эта карта?'} text={'Агроклиматические особенности возделывания хмеля  предполагают что  для модернизации и освоения  новых регионов производства  хмелесырья и        хмелепродуктов, необходимо учитывать зональные и сортовые особенности. Интерактивная карта  отражает новые научные подходы, включающие обоснование  прогнозных сценариев развития хмелепродуктового подкомплекса в горизонте до 2035 года.'} />
                  <GlassBlock size='sm' title={'Никто кроме нас'} text={'Экспонат разработан совместно с Белорусским государственным аграрным техническим университетом. Отечественных и зарубежных аналогов не существует.'} />
              </div>
              <div className='relative -top-16' id='metodics' />
              <div className='flex justify-center mb-20 mx-2'>
                <TextSection title={'Наша цель и методика'} content={'Методика направлена на выделение терруаров регионов с учетом зональных особенностей возделывания хмеля в Российской Федерации и Республики Беларусь Разработанная система визуализации (информационный производства на основе комплексного системно-функционального и дифференцированного подхода, метода Форсайт в горизонте до 2035 года формирует группы регионов схожие по природно- климатическим, экономическим, экологическим и социальным условиям (терруары) и позволяет выделить наиболее благоприятные регионы для производства хмелесырья до 2035 года по регионам России и Республики Беларусь.'} />
              </div>
              <div className='flex justify-center'>
                <TextSection title={'Потенцальные пользователи'}/>
              </div>
              <div className='flex flex-wrap gap-5 justify-center mb-20'>
                  <GlassCard
                      title={'Министерство сельского хозяйства Российской Федерации'}
                      imageSrc={'icons/minselhoz_rus.svg'}
                      rounded={true}
                  />
                  <GlassCard
                      title={'Министерство сельского хозяйства и продовольствия Республики Беларусь'}
                      imageSrc={'icons/minselhoz_rb.svg'}
                      rounded={true}
                  />
                  <GlassCard
                      title={'Россельхозбанк'}
                      imageSrc={'icons/rshb.svg'}
                      rounded={false}
                  />
                  <GlassCard
                      title={'Союз органического земледелия'}
                      imageSrc={'icons/union.png'}
                      rounded={true}
                  />
              </div>
              <div className='relative -top-16' id='implementation' />
              <div className='flex justify-center mb-20 mx-2'>
                  <GlassBlock
                      title={'Эффект от внедрения разработки: '}
                      text={'Выделяются терруары регионов с разными  социально-экономическими и зональными особенностями для рационального размещения производства хмелесырья и хмелепродуктов, что позволит разрабатывать конкретные точечные рекомендации для  оптимального распределения и совершенствования механизма господдержки субъектов РФ с точки зрения получения качественной продукции, снижения затрат, связанных с  производством, логистикой, маркетингом и т.п. и вовлечения большего количества фермерских хозяйств в процесс производства хмелесырья и хмелепродуктов.\n' +
                          '\n' +
                          'Методика также позволят оптимизировать размещение  пивоваренных  заводов и предприятий  промышленности по территории  терруаров с учетом наличия хмелесырья поставляемого сельхозпроизводителями, минимизируя промежуточную обработку сырья.'}
                      size={'lg'}
                  />
              </div>
              <div className='relative -top-16' id='results' />
              <div className='flex justify-center px-4 mb-20 mx-2'>
                  <TextSection title={'Доведение результатов исследования до научного сообщества'}>
                      <ul className='list-disc text-[#393939] text-2xl max-w-[800px]'>
                          <li>Аграрное предпринимательство: история, тренды, горизонты развития» (Москва, 11-12 апреля 2025 г.);</li>
                          <li>Международной научно-практической конференции студентов, аспирантов и молодых ученых «Экономика России в условиях глобальных вызовов» (Курск, 7 декабря 2022 г.);</li>
                          <li>III Международная тренд-сессия«Цифровые коммуникации в экономике» 10 октября 2024 года;</li>
                          <li>Конференция «Российский хмель» в рамках Всероссийского фестиваля «Зеленое золото России - 2025» 16-17 июля 2025, г. Чебоксары.</li>
                      </ul>
                  </TextSection>
              </div>
              <div className='relative -top-16' id='universities' />
              <div className='flex justify-center'>
                  <TextSection title={'Образование и наука'} />
              </div>
              <div className='flex flex-wrap gap-5 justify-center mb-20 mx-2'>
                  <a target='_blank' href='http://academy21.ru/nauka-i-innovacii/scientific-and-practical-center-for-hops-research/'>
                      <GlassCard
                          title={'Чувашский государственный аграрный  университет'}
                          imageSrc={'icons/chu_univ.png'}
                          rounded={false}
                      />
                  </a>
                  <a target='_blank' href='https://www.asau.ru/'>
                      <GlassCard
                          title={'Алтайский государственный аграрный университет'}
                          imageSrc={'icons/alt_univ.png'}
                          rounded={false}
                      />
                  </a>
                  <a target='_blank' href='https://www.timacad.ru/'>
                      <GlassCard
                          title={'Российский государственный аграрный университет – МСХА им. К.А. Тимирязева'}
                          imageSrc={'icons/rgau_msha.png'}
                          rounded={true}
                      />
                  </a>
                  <a  target='_blank' href='https://spbgau.ru/abitur/news/rektor-spbgau-predstavil-plan-razvitiya-pivovareniya-na-soveshchanii-s-ministrom-selskogo-khozyaystv/'>
                      <GlassCard
                          title={'Санкт-Петербургский государственный аграрный университет'}
                          imageSrc={'icons/peter_univ.png'}
                          rounded={false}
                      />
                  </a>

                  <a target='_blank' href='https://baa.by/'>
                      <GlassCard
                          title={'Белорусская государственная сельскохозяйственная академия'}
                          imageSrc={'icons/bgsha.png'}
                          rounded={false}
                      />
                  </a>

              </div>
              <div className='relative -top-16' id='scientists' />
              <div className='flex justify-center'>
                  <TextSection title={'Российские ученые-хмелеводы'}/>
              </div>
              <div className='flex flex-wrap gap-5 justify-center mb-20 mx-2'>
                  <a target='_blank' href='https://cap.ru/news/2025/08/06/glava-chuvashii-oleg-niko '>
                      <GlassCard imgFull title={'Макушев Андрей Евгеньевич'} text={'Заместитель Председателя Кабинета Министров -министр сельского хозяйства Чувашской Республики, к.э.н.'} imageSrc={'images/persons/person1.png'} />
                  </a>
                  <a target='_blank' href='https://www.livelib.ru/author/1310509-nikolaj-aleksandrov'>
                      <GlassCard imgFull title={'Николай Александрович Александров'} text={'Агроном, хмелевод, ученый\n' +
                          '1969 - 1970 г.г. – Главный агроном – заместитель директора треста хмелеводческих совхозов МСХ ЧАССР\n' +
                          '1970 – 1971 г.г. – Начальник Республиканской хмелеводческой конторы\n' +
                          '1971 – 1973 г.г. - Начальник отдела по хмелеводству министерства сельского хозяйства РСФСР\n' +
                          ' 1984 -1986 г.г. – Заведующим отделом технологии производства хмеля – заместитель директора по внедрению Республиканская научно-исследовательская хмелеводческая станция (РНИХС) МСХ РСФСР.'} imageSrc={'images/persons/person2.png'} />
                  </a>
                  <a target='_blank' href={'http://academy21.ru/sveden/struct/'}>
                      <GlassCard imgFull title={'Пушкаренко Николай Николаевич'} text={'Заслуженный деятель науки Чувашской Республики инженер-технолог, к.т.н., декан Инженерного факультета  кандидат технических наук, доцент кафедры технического сервиса Чувашского государственного аграрного университета.'} imageSrc={'images/persons/person3.png'} />
                  </a>
                  <a target='_blank' href='http://academy21.ru/nauka-i-innovacii/scientific-and-practical-center-for-hops-research/'>
                      <GlassCard imgFull title={'Коротков Анатолий Васильевич'} text={'Центр компетенций "Чувашия - центр производства хмеля":заведующий, к.с.-х.н.'} imageSrc={'images/persons/person4.png'} />
                  </a>

              </div>
              <div className='flex justify-center'>
                  <TextSection title={'Белорусские ученые – хмелеводы'}/>
              </div>
              <div className='flex flex-wrap gap-5 justify-center mb-20 mx-2'>
                  <a target='_blank' href='https://fbe.grsu.by/index.php/kafedry-fakulteta/21-kafedry-fakulteta/321-milosta-genrikh-maryanovich'>
                    <GlassCard imgFull title={'Милоста Генрих Марьянович'} text={'Специалист в области растениеводства и агрохимии, доктор сельскохозяйственных наук, профессор.'} imageSrc={'images/persons/person5.png'} />
                  </a>
                  <a target='_blank' href='http://aw.belal.by/russian/science/research/personalrus/lapa/index.htm'>
                      <GlassCard imgFull title={'Лапа Виталий Витальевич'} text={'Белорусский учёный-агрохимик. Академик Национальной академии наук Беларуси, доктор сельскохозяйственных наук, профессор. Лауреат Государственной премии Республики Беларусь. Заслуженный деятель науки Республики Беларусь.'} imageSrc={'images/persons/person6.png'} />
                  </a>
                  <a target='_blank' href='https://www.bsatu.by/ru/yakovchik-nikolay-stepanovich'>
                      <GlassCard imgFull title={'Яковчик Николай Степанович'} text={'Профессор, доктор сельскохозяйственных наук, доктор экономических наук. Заслуженный работник сельского хозяйства Республики Беларусь.' +
                          ' Иностранный член Российской академии наук по отделению сельскохозяйственных наук, специальность –  «экономика сельского хозяйства» \n' +
                          ' Награжден медалью "За трудовые заслуги"\n' +
                          'Награжден Почетной грамотой Министерства сельского хозяйства Российской Федерации.'} imageSrc={'images/persons/person7.png'} />
                  </a>
                  <a target='_blank' href='https://profapkbrest.by/bizon-vklad-v-kachestvo-belorusskogo-piva/'>
                      <GlassCard imgFull title={'Андрей Валерьевич Антонович'} text={'директор фермерского хозяйства ООО "Бизон“ по выращиванию хмеля Малоритский район  Брестской области Беларуси'} imageSrc={'images/persons/person8.png'} />
                  </a>

              </div>
              <div className='relative -top-16' id='manufacturers' />
              <div className='flex justify-center'>
                  <TextSection title={'Производители хмелепродуктов'} />
              </div>
              <div className='flex flex-wrap gap-5 justify-center mb-20 mx-2'>
                  <a target='_blank' href='https://baltika.ru'>
                      <GlassCard
                          title={'Пивоваренная компания Балтика'}
                          imageSrc={'companies/baltika.png'}
                          rounded={false}
                      />
                  </a>
                  <a target='_blank' href='https://buketbeer.ru'>
                      <GlassCard
                          title={'ОАО «Букет Чувашии»'}
                          imageSrc={'companies/buket_chu.png'}
                          rounded={false}
                      />
                  </a>
                  <a target='_blank' href='https://grainrus.com'>
                      <GlassCard
                          title={'Агропромышленный холдинг «Грейнрус»'}
                          imageSrc={'companies/grain.png'}
                          rounded={true}
                      />
                  </a>
                  <a target='_blank' href='https://www.knightberg.ru/'>
                      <GlassCard
                          title={'ООО «Красный пивовар»'}
                          imageSrc={'companies/pivovar.png'}
                          rounded={false}
                      />
                  </a>
                  <a target='_blank' href='https://barley-malt.ru/?p=32289'>
                      <GlassCard
                          title={'Елецкое пиво'}
                          imageSrc={'companies/el_pivo.png'}
                          rounded={false}
                      />
                  </a>

              </div>
          </div>
      </>

  )
}

export default App
