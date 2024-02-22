import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import {mainMenu} from "~/utils/consts.jsx";
import More from "~/layout/sidebar/menu/more/index.jsx";
import New from "~/layout/sidebar/menu/new/index.jsx";

export default function Menu() {
  return (
      <nav className='mt-0.5 mb-1'>
        {mainMenu.map((navlink, i) => (
            <NavLink to={navlink.to} className='py-[3px] block group' key={i}>
              {({isActive}) => (
                  <div
                      className={classNames(
                          'p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors',
                          {'font-bold': isActive}
                      )}
                  >
                    <div className='w-[26.25px] h-[26.25px] relative'>
                      {navlink?.notifications && <span
                          className='w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] inline-flex items-center justify-center font-semibold'>{navlink?.notifications}</span>
                      }
                      <svg
                          viewBox='0 0 24 24'
                          width={26.25}
                          height={26.25}
                          className='block'
                      >
                        <path
                            fill='#e7e9ea'
                            d={
                              !isActive
                                  ? `${navlink.defaultIcon}`
                                  : `${navlink.isActiveIcon}`
                            }
                        />
                      </svg>
                    </div>
                    <span className='pr-4 text-xl'>{navlink.pathName}</span>
                  </div>
              )}
            </NavLink>
        ))}

        <More/>

        <New/>
      </nav>
  )
}